import { mapValues, get, pick } from 'lodash';

export const updateSandbox = (id, values) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  await firestore.set({
    collection: "sandboxs",
    doc: id
  }, {
    ...pick(values, ["path", "name"]),
    privacy: {
      type: get(values, "privacy", "private"),
    }
  }, {
    merge: true
  });
};

export const updateSandboxPrivacy = (id, values) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const { uid, permission } = values;

  await firestore.set({
    collection: "sandboxs",
    doc: id
  }, {
    privacy: {
      share: {
        [uid]: permission,
      }
    }
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

export const renameSandboxFile = ({
  id,
  oldPath,
  newPath,
  prefixedPath,
  directory,
}) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  const prefix = prefixedPath
    .split("/")
    .filter(Boolean)
    .slice(0, -1)
    .join("/");

  const files = sourceRef.get("files");

  const candidates = directory ? (
    Object.keys(files)
      .filter(file => file.startsWith(oldPath))
      .reduce((obj, item) => {

        console.log(item);

        const re = new RegExp(`^${oldPath}`, "g");
        const updated = item.replace(re, prefix ? `/${prefix}/${newPath}/` : `/${newPath}/`);

        return {
          ...obj,
          [item]: firestore.FieldValue.delete(),
          [updated]: files[oldPath]
        }
      },
      {}
    )
  ) : {
    [oldPath]: firestore.FieldValue.delete(),
    [newPath]: files[oldPath]
  };

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

export const exportSandbox = (id) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: id
  });

  return sourceRef.data();
};

export const forkSandbox = (sid) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const { currentUser: { uid } } = firebase.auth().toJSON();

  const sandboxRef = await firestore.get({
    collection: "sandboxs",
    doc: sid
  });

  const { name, template } = (pick(sandboxRef.data(), ["name", "template"]));

  const { id } = await firestore.add({
    collection: "sandboxs"
  }, {
    name: `(Forked) ${name}`,
    template: template,
    owner: uid,
    privacy: {
      type: "private",
      to: [],
      share: {},
    },
    createdAt: firestore.FieldValue.serverTimestamp()
  });

  const sourceRef = await firestore.get({
    collection: "sandbox_sources",
    doc: sid
  });

  await firestore.set({
    collection: "sandbox_sources",
    doc: id
  }, {
    files: {},
    ...sourceRef.data()
  }, {
    merge: true
  });

  await firestore.set({
    collection: "sandbox_sensitive",
    doc: id
  }, {
    files: {}
  }, {
    merge: true
  });

  return id;
};

export const selectSandboxFull = ({
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

export const selectSandboxLite = ({ firestoreSandbox: { ordered } }) => {
  return {
    ...get(ordered, "sandbox[0]", {}),
  };
};

export const selectProfile = ({ firestoreSandbox: { data } }) => {
  return {
    ...get(data, "profile")
  };
};
