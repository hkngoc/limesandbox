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
  const [services, setServices] = React.useState(null);
  const [contextMenuService, setContextMenuService] = React.useState(null);

  React.useEffect(() => {
    if (container && container.parent) {
      const services = new DynamicStandaloneServices(container.parent, {});
      setServices(services);

      const telemetryService = services.get(ITelemetryService);
      const notificationService = services.get(INotificationService);
      const contextViewService = services.get(IContextViewService);
      const keybindingService = services.get(IKeybindingService);

      const themeService = services.get(IThemeService);
      themeService.setTheme("vs-dark");

      const contextMenuService = new ContextMenuService(telemetryService, notificationService, contextViewService, keybindingService, themeService);
      setContextMenuService(contextMenuService)
    }
  }, [container]);
  
  React.useEffect(() => {
    return () => {
      if (services) {
        services.dispose();
      }
      if (contextMenuService) {
        contextMenuService.dispose();
      }
    }
  }, [services, contextMenuService]);

  const getMonacoServicesState = () => {
    return {
      contextMenuService
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
