import React from 'react';

const SandpackLayout = React.createContext(null);

const getSandpackLayoutStateFromProps = (props) => {
  const {
    activePath,
    openPaths,
  } = props;

  return {
    activePath,
    openPaths,
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
    this._getSandpackLayoutState = () => {
      const {
        activePath,
        openPaths,
      } = this.state;

      return {
        activePath,
        openPaths,
        setActiveFile: this.setActiveFile,
        openFile: this.openFile,
        updateOpenPaths: this.updateOpenPaths,
      };
    };

    const { activePath, openPaths, } = getSandpackLayoutStateFromProps(props);

    this.state = {
      activePath,
      openPaths,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activePath !== this.props.activePath || JSON.stringify(prevProps.openPaths) !== JSON.stringify(this.props.openPaths)) {
      const { activePath, openPaths, } = getSandpackLayoutStateFromProps(this.props);

      this.setState({ activePath, openPaths });
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
