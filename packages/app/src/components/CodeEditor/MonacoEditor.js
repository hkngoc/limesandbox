import React from 'react';
import Editor from '@monaco-editor/react';

import monokai from 'monaco-themes/themes/Monokai.json';

import monokaiPro from './assets/monokai-pro.json';
import './assets/monaco.css';

const MonacoEditor = ({ filePath, code, onCodeUpdate, onCodeSave, onInvokeCommandPalette }) => {
  const editorRef = React.useRef(null);

  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme("monokai", monokai);
    monaco.editor.defineTheme("monokai-pro", monokaiPro);
  };
  
  const onSave = () => {
    
    if (onCodeSave) {
      const editor = editorRef.current;

      if (editor) {
        onCodeSave.call(this, editor.getModel().getValue());
      }
    }
  };

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;

    // console.log(editor, monaco);

    // Change open command palette from F1 -> Ctrl+Shift+P
    editor._standaloneKeybindingService._getResolver()._lookupMap.get("editor.action.quickCommand")[0].resolvedKeybinding._parts[0].ctrlKey=true;
    editor._standaloneKeybindingService._getResolver()._lookupMap.get("editor.action.quickCommand")[0].resolvedKeybinding._parts[0].shiftKey=true;
    editor._standaloneKeybindingService._getResolver()._lookupMap.get("editor.action.quickCommand")[0].resolvedKeybinding._parts[0].keyCode=monaco.KeyCode.KEY_P;
    editor._standaloneKeybindingService.updateResolver();
    // Ctrl+S
    if (onCodeSave) {
      editor.addCommand(2048 | 49, onSave);
    }
    // need register event Ctrl+P for select file command palette
  };

  return (
    <Editor
      wrapperClassName="monaco-editor-wrapper"
      theme="monokai-pro"
      path={filePath}
      value={code}
      keepCurrentModel={true}
      saveViewState={true}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorMount}
      onChange={onCodeUpdate}
      options={{
        automaticLayout: true,
        wordWrap: "off",
        renderWhitespace: true,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false
        },
      }}
    />
  );
};

export default MonacoEditor;
