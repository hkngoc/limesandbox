import React from 'react';

import { DynamicStandaloneServices } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneServices';
import { IContextViewService } from 'monaco-editor/esm/vs/platform/contextview/browser/contextView';
import { ITelemetryService } from 'monaco-editor/esm/vs/platform/telemetry/common/telemetry.js';
import { IThemeService } from 'monaco-editor/esm/vs/platform/theme/common/themeService.js';
import { IKeybindingService } from 'monaco-editor/esm/vs/platform/keybinding/common/keybinding.js';
import { INotificationService } from 'monaco-editor/esm/vs/platform/notification/common/notification.js';
import { ContextMenuService } from 'monaco-editor/esm/vs/platform/contextview/browser/contextMenuService.js';

const MonacoServices = React.createContext(null);

const MonacoServicesProvider = ({ container, children }) => {
  const servicesRef = React.useRef();
  const contextMenuServiceRef = React.useRef();

  React.useEffect(() => {
    if (container) {
      const services = new DynamicStandaloneServices(container.parent, {});
      servicesRef.current = services;

      const telemetryService = services.get(ITelemetryService);
      const notificationService = services.get(INotificationService);
      const contextViewService = services.get(IContextViewService);
      const keybindingService = services.get(IKeybindingService);

      const themeService = services.get(IThemeService);
      themeService.setTheme("vs-dark");

      const contextMenuService = new ContextMenuService(telemetryService, notificationService, contextViewService, keybindingService, themeService);
      contextMenuServiceRef.current = contextMenuService;
    }

    return () => {
      if (servicesRef.current) {
        servicesRef.current.dispose();
      }
      if (contextMenuServiceRef.current) {
        contextMenuServiceRef.current.dispose();
      }
    };
  }, [container, servicesRef, contextMenuServiceRef]);

  const getMonacoServicesState = () => {
    return {
      contextMenuService: contextMenuServiceRef.current
    };
  };

  return (
    <MonacoServices.Provider
      value={getMonacoServicesState()}
    >
      {children}
    </MonacoServices.Provider>
  )
};

const MonacoServicesConsumer = MonacoServices.Consumer;

const useMonacoServices = () => {
  const services =  React.useContext(MonacoServices);

  const { dispatch, listen, ...rest } = services;
  return {
    services: { ...rest },
    dispatch,
    listen,
  };
};

export {
  MonacoServicesProvider,
  MonacoServicesConsumer,
  MonacoServices as MonacoServicesContext,
  useMonacoServices,
};
