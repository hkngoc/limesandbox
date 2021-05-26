import {
  Navigator,
} from '@codesandbox/sandpack-react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

const SomeMenu = () => {
  const { pathname } = useLocation();

  const next = pathname.replace(/(\/sandbox\/)(\w+)(\/\w+)/, (match, p1, p2, p3) => {
    return `${p1}p${p2}${p3}`;
  });

  return (
    <button
      {...{
        "aria-label": "Open In New Window",
        title: "Open In New Window",
        type: "button",
        className: "sp-button sp-icon"
      }}
    >
      <Link
        to={next}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          fill="currentColor"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 6a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H8zM5 9h1v5a2 2 0 002 2h7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z"
          />
        </svg>
      </Link>
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
