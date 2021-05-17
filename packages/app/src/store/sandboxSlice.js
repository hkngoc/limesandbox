import { createSlice } from '@reduxjs/toolkit';
import { mapValues, get, pick } from 'lodash';

export const sandboxSlice = createSlice({
  name: "sandbox",
  initialState: {
    layout: {
      showFileMenu: false,
      editorVsPreviewSizes: [60, 40],
      editorVsFileMenuSizes: [100, 0],
      editorSizes: [30, 70]
    }
  },
  reducers: {
    showFileMenuPane: (state) => {
      state.layout = {
        ...state.layout,
        showFileMenu: true,
      }
    },
    hideFileMenuPane: (state) => {
      state.layout = {
        ...state.layout,
        showFileMenu: false,
        editorVsFileMenuSizes: [100, 0]
      }
    },
    resizePane: (state, action) => {
      const { payload: { spliter, sizes } } = action;

      state.layout[spliter] = sizes;
    }
  }
});

export const updateSandbox = (id, values) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandboxs",
    doc: id
  }, {
    ...pick(values, ["path", "name", "privacy"])
  }, {
    merge: true
  });
};

export const saveSandboxCodeAsync = (id, path, code, sensitive = false) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: sensitive ? "sandbox_sensitive" : "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: code
    }
  }, {
    merge: true
  });
};

export const renameSandboxFile = (id, oldPath, newPath) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [oldPath]: firestore.FieldValue.delete(),
      [newPath]: sourceRef.get("files")[oldPath]
    }
  }, {
    merge: true
  });
};

export const newSandboxFile = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: "\n"
    }
  }, {
    merge: true
  });
};

export const newSandboxFolder = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: {
        code: "\n",
        folder: true
      }
    }
  }, {
    merge: true
  });
};

export const deleteSandboxFile = (id, path, prefixedPath, directory) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  const candidates = directory ? (
    Object.keys(sourceRef.get("files"))
    .filter(file => file.startsWith(path))
    .reduce((obj, item) => {

      return {
        ...obj,
        [item]: firestore.FieldValue.delete()
      }
    }, {})
  ) : (
    {
      [path]: firestore.FieldValue.delete()
    }
  )

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      ...candidates
    }
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {
      ...candidates
    }
  }, {
    merge: true
  });
};

export const markSensitiveSandboxFile = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {
      [path]: sourceRef.get("files")[path]
    }
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: "\n"
    }
  }, {
    merge: true
  });

};

export const unmarkSensitiveSandboxFile = (id, path) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sensitive",
    doc: id
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {
      [path]: sourceRef.get("files")[path]
    }
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {
      [path]: firestore.FieldValue.delete()
    }
  }, {
    merge: true
  });
};

export const createTemplateFromSandbox = (id) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sandboxRef = await firestore.get({
    collection: "sandboxs",
    doc: id
  });

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  const { name, template, owner } = sandboxRef.data();
  const { id: templateId } = await firestore.add({
    collection: "templates"
  }, {
    name,
    template,
    owner,
    createdAt: firestore.FieldValue.serverTimestamp()
  });

  await firestore.set({
    collection: "template_sources",
    doc: templateId
  }, {
    ...sourceRef.data()
  }, {
    merge: true
  });
};

const selectSandbox = state => state.sandbox;

const selectSandboxFull = ({
  firestoreSandbox: {
    ordered
  },
}) => {
  const { id, ...customSetup } = get(ordered, "sandbox_sources[0]", { });
  const { files } = get(ordered, "sandbox_sensitive[0]", { files: {} });

  return {
    ...get(ordered, "sandbox[0]", {}),
    customSetup,
    sensitive: {
      files: mapValues(files, code => ({ code, sensitive: true }))
    }
  }
};

const selectSandboxLite = ({ firestoreSandbox: { ordered } }) => {
  return {
    ...get(ordered, "sandbox[0]", {}),
  };
};

const selectProfile = ({ firestoreSandbox: { data } }) => {
  return {
    ...get(data, "profile")
  };
};

export {
  selectProfile,
  selectSandbox,
  selectSandboxLite,
  selectSandboxFull
};

export const { showFileMenuPane, hideFileMenuPane, resizePane } = sandboxSlice.actions;

export default sandboxSlice.reducer;
