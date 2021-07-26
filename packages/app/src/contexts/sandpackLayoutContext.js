import React from 'react';
import { pickBy } from 'lodash';

const SandpackLayout = React.createContext(null);

const getSandpackLayoutStateFromProps = (props) => {
  const {
    files = [],
    customSetup,
  } = props;

  return {
    files,
    customSetup
  }
};

class SandpackLayoutProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setActiveFile = (path) => {
      this.setState({ activePath: path });
    };
    this.openFile = (path) => {
      this.setState(({ openPaths }) => {
        const newPaths = openPaths.includes(path)
          ? openPaths
          : [...openPaths, path];
        return {
          activePath: path,
          openPaths: newPaths,
        };
      });
    };
    this.updateOpenPaths = (paths) => {
      this.setState({ openPaths: paths });
    };
    this.setActiveMenu = (menu) => {
      this.setState({ activeMenu: menu });
    };
    this.togleFolder = (path) => {
      const { activeFolder } = this.state;
      const {
        [path]: open = false
      } = activeFolder;

      this.setState({
        activeFolder: {
          ...activeFolder,
          [path]: !open,
        }
      })
    };
    this._getSandpackLayoutState = () => {
      const {
        activePath,
        openPaths,
        customSetup,
        activeMenu,
        activeFolder,
      } = this.state;

      return {
        activePath,
        openPaths,
        customSetup,
        activeMenu,
        activeFolder,
        setActiveFile: this.setActiveFile,
        openFile: this.openFile,
        updateOpenPaths: this.updateOpenPaths,
        setActiveMenu: this.setActiveMenu,
        togleFolder: this.togleFolder,
      };
    };

    const nextState = getSandpackLayoutStateFromProps(props);

    this.state = {
      activePath: null,
      openPaths: [],
      activeMenu: {},
      activeFolder: {},
      ...nextState
    };
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.customSetup) !== JSON.stringify(this.props.customSetup)
      || JSON.stringify(prevProps.files) !== JSON.stringify(this.props.files)
    ) {
      const nextState = getSandpackLayoutStateFromProps(this.props);

      const { openPaths: currentOpenPaths, activePath: currentActivePath, activeFolder: currentActiveFolder } = this.state;

      const openPaths = currentOpenPaths.filter(path => nextState.files.includes(path));
      const activePath = openPaths.includes(currentActivePath) ? currentActivePath : (openPaths.length > 0 ? openPaths[0] : null);

      const { files } = this.props;
      const activeFolder = pickBy(currentActiveFolder, (v, k) => {
        return files.find(file => file.startsWith(k));
      });

      this.setState({ ...nextState, openPaths, activePath, activeFolder });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <SandpackLayout.Provider
        value={this._getSandpackLayoutState()}
      >
        {children}
      </SandpackLayout.Provider>
    );
  }
};

SandpackLayoutProvider.defaultProps = {
};

const SandpackLayoutConsumer = SandpackLayout.Consumer;

const useSandpackLayout = () => {
  const sandpackLayout =  React.useContext(SandpackLayout);

  const { dispatch, listen, ...rest } = sandpackLayout;
  return {
    sandpackLayout: { ...rest },
    dispatch,
    listen,
  };
};

export {
  SandpackLayoutProvider,
  SandpackLayoutConsumer,
  SandpackLayout as SandpackReactContext,
  useSandpackLayout,
};
