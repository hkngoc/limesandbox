import React from 'react';

import { IKeybindingService } from 'monaco-editor/esm/vs/platform/keybinding/common/keybinding.js';

import { useMonacoServices, } from 'contexts/monacoServiceContext';
import { Action, SubmenuAction, Separator } from 'monaco-editor/esm/vs/base/common/actions';

const MenuSVG = (props) => {
  return (
    <svg
      viewBox="0 0 10 7"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M7.5 5.806H0v.944h7.5v-.944zm2.25-2.903H0v.944h9.75v-.944zM0 0h9.75v.944H0V0z"
      />
    </svg>
  );
};

const Menu = ({ admin, onMenuClick }) => {
  const { services: { contextMenuService, services } } = useMonacoServices();
  const logoRef = React.useRef();

  React.useEffect(() => {
    if (services) {
      const keybindingService = services.get(IKeybindingService);

      const { _dynamicKeybindings } = keybindingService;
      const exist = _dynamicKeybindings.find(c => c.command === 1);
      if (!exist) {
        keybindingService.addDynamicKeybinding("home", 2048 | 47, () => {
          if (onMenuClick) {
            onMenuClick.call(this, "home");
          }
        });
      }
    }
  }, [services, onMenuClick]);

  const handleContextMenu = (params) => {
    if (onMenuClick) {
      onMenuClick.call(this, params);
    }
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (contextMenuService) {
      const { current } = logoRef;
      const { bottom, left } = current.getBoundingClientRect();

      const anchorOffset = { x: 0, y: 5 };
      const anchor = { x: left + anchorOffset.x, y: bottom + anchorOffset.y };

      const actions = [];
      actions.push(new Action("home", "Dashboard", "", true, handleContextMenu.bind(this, "home")));
      actions.push(new Separator());
      actions.push(new SubmenuAction(2, "File", [
        new Action(3, "Fork Sandbox", "", true, handleContextMenu.bind(this, "fork")),
        new Action(4, "Export to ZIP", "", true, handleContextMenu.bind(this, "export")),
      ], ""));

      if (admin) {
        actions.push(new Separator());
        actions.push(new SubmenuAction(5, "Administrator", [
          new Action(6, "Fork To Template", "", admin, handleContextMenu.bind(this, "fork to template")),
        ], ""));
      }

      contextMenuService.showContextMenu({
        getAnchor: () => anchor,
        getActions: () => actions,
      });
    }
  };

  return (
    <div
      ref={logoRef}
      className="rounded h-100"
    >
      <button
        className="sp-button h-100"
        type="button"
        onClick={onContextMenu}
      >
        <MenuSVG />
      </button>
    </div>
  );
};

export default Menu;
