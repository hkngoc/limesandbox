// import React from 'react';

// import { DataTree as Tree } from 'monaco-editor/esm/vs/base/browser/ui/tree/dataTree';

// const ITEMS = [{
//   id: 1
// }];

// const MonacoTree = () => {
//   const [items] = React.useState(ITEMS);

//   const treeRef = React.useRef();
  
//   const delegate = {
//     getHeight: (element) => {
//       return 48;
//     },
//     getTemplateId: ({ id }) => {
//       return 0;
//     },
//     hasDynamicHeight: () => {
//       return false;
//     },
//   };
  
//   const renderers =  [{
//     templateId: 0,
//     renderTemplate: (contents) => {
//       console.log(contents);
//     },
//     renderElement: (...params) => {
//       console.log(params);
//     },
//   }];

//   const options = {
//     dnd: false,
//     identityProvider: ({ id }) => {
//       return id;
//     }
//   }

//   const tree = React.useRef();
//   React.useEffect(() => {
//     if (treeRef.current) {
//       tree.current = new Tree(null, treeRef.current, delegate, renderers, items, options);
//     }
//   }, [treeRef]);

//   return (
//     <div
//       className="monaco-tree"
//       ref={(ref) => { treeRef.current = ref}}
//     />
//   );
// };

// export default MonacoTree;

// export {
//   MonacoTree
// }
