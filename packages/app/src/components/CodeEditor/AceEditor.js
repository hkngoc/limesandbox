import AceEditor from 'react-ace';

import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const Editor = ({ onSave, ...props}) => {
  return (
    <AceEditor
      mode="jsx"
      theme="monokai"
      fontSize={16}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      commands={[
        {
          name: "save",
          bindKey: {
            win: "Ctrl-S",
            mac: "Cmd-S",
          },
          exec: onSave,
        }
      ]}
      {...props}
    />
  );
};

export default Editor;
