import { CodeEditor } from '@codesandbox/sandpack-react';

const Editor = (props) => {
  return (
    <CodeEditor
      showLineNumbers={true}
      wrapContent={false}
      { ...props }
    />
  );
};

export default Editor;
