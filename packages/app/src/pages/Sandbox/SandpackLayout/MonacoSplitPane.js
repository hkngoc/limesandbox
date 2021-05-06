import React from 'react';
import SplitPane from 'react-split';

const MonacoSplitPane = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;

  return (
    <SplitPane
      ref={ref}
      {...rest}
    >
      {props.children}
    </SplitPane>
  );
});

export default MonacoSplitPane;
