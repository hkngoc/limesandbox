import React from 'react';

const SandpackLayout = React.createContext(null);

const getSandpackLayoutStateFromProps = (props) => {
  const {
    activePath,
    openPaths,
    customSetup,
    activeMenu = {},
  } = props;

  return {
    activePath,
    openPaths,
    customSetup,
    activeMenu,
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
    this._getSandpackLayoutState = () => {
      const {
        activePath,
        openPaths,
        customSetup,
        activeMenu,
      } = this.state;

      return {
        activePath,
        openPaths,
        customSetup,
        activeMenu,
        setActiveFile: this.setActiveFile,
        openFile: this.openFile,
        updateOpenPaths: this.updateOpenPaths,
        setActiveMenu: this.setActiveMenu,
      };
    };

    const nextState = getSandpackLayoutStateFromProps(props);

    this.state = nextState;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activePath !== this.props.activePath
      || JSON.stringify(prevProps.openPaths) !== JSON.stringify(this.props.openPaths)
      || JSON.stringify(prevProps.customSetup) !== JSON.stringify(this.props.customSetup)
    ) {
      const nextState = getSandpackLayoutStateFromProps(this.props);

      this.setState(nextState);
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
  openPaths: [],
  activePath: null,
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
