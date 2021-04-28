import React from 'react';

class File extends React.PureComponent {
  constructor(props) {
    super(props);

    this.clickCount = 0;

    this.selectFile = this.selectFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectFile(double = false) {
    const { selectFile, path, onClick } = this.props;

    if (selectFile) {
      selectFile(path, double);
    } else if (onClick) {
      onClick(path, double);
    }
  }

  handleClick() {
    const { onClick } = this.props;
    if (onClick) {
      return this.selectFile(false);
    }

    this.clickCount = this.clickCount + 1;

    setTimeout(() => {
      if (this.clickCount === 1) {
        this.selectFile(false);
      } else if (this.clickCount === 2) {
        this.selectFile(true);
      };

      this.clickCount = 0;
    }, this.props.latency || 200);
  }

  render() {
    const { depth, active, path } = this.props;

    const fileName = path.split("/").filter(Boolean).pop();

    return (
      <button
        className="sp-button"
        {...{
          "data-active": active,
          type: "button",
          style: {
            paddingLeft: 8 * depth + "px"
          },
        }}
        onClick={this.handleClick.bind(this)}
      >
        {fileName}
      </button>
    );
  }
};

export default File;
