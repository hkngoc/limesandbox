import {
  Navigator,
} from '@codesandbox/sandpack-react';

const SomeMenu = () => {
  return (
    <button
      {...{
        "aria-label": "Open In New Window",
        title: "Open In New Window",
        type: "button",
        className: "sp-button sp-icon"
      }}
    >
      <svg
        fill="currentColor"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#777"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 6a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H8zM5 9h1v5a2 2 0 002 2h7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z"
        />
      </svg>
    </button>
  );
};

const MyNavigator = () => {
  return (
    <Navigator
      appendMenu={SomeMenu}
    />
  );
};

export default MyNavigator;
export {
  MyNavigator as Navigator
}
