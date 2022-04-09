/* eslint-env worker */
/* eslint no-var: off, vars-on-top: off, strict: off, no-use-before-define: off */
/* globals prettier prettierPlugins */

var imported = Object.create(null);
function importScriptOnce(url) {
  if (!imported[url]) {
    imported[url] = true;
    importScripts(url);
  }
}

// this is required to only load parsers when we need them
var parsers = {
  // JS - Babel
  get babel() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.babel;
  },
  get "babel-flow"() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers["babel-flow"];
  },
  // backward compatibility
  get babylon() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.babylon;
  },
  get json() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.json;
  },
  get json5() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.json5;
  },
  get "json-stringify"() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers["json-stringify"];
  },
  get __js_expression() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.__js_expression;
  },
  get __vue_expression() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.__vue_expression;
  },
  get __vue_event_binding() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-babylon.js");
    return prettierPlugins.babylon.parsers.__vue_event_binding;
  },
  // JS - Flow
  get flow() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-flow.js");
    return prettierPlugins.flow.parsers.flow;
  },
  // JS - TypeScript
  get typescript() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-typescript.js");
    return prettierPlugins.typescript.parsers.typescript;
  },
  // JS - Angular Action
  get __ng_action() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-angular.js");
    return prettierPlugins.angular.parsers.__ng_action;
  },
  // JS - Angular Binding
  get __ng_binding() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-angular.js");
    return prettierPlugins.angular.parsers.__ng_binding;
  },
  // JS - Angular Interpolation
  get __ng_interpolation() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-angular.js");
    return prettierPlugins.angular.parsers.__ng_interpolation;
  },
  // JS - Angular Directive
  get __ng_directive() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-angular.js");
    return prettierPlugins.angular.parsers.__ng_directive;
  },

  // CSS
  get css() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-postcss.js");
    return prettierPlugins.postcss.parsers.css;
  },
  get less() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-postcss.js");
    return prettierPlugins.postcss.parsers.css;
  },
  get scss() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-postcss.js");
    return prettierPlugins.postcss.parsers.css;
  },

  // GraphQL
  get graphql() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-graphql.js");
    return prettierPlugins.graphql.parsers.graphql;
  },

  // Markdown
  get markdown() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-markdown.js");
    return prettierPlugins.markdown.parsers.remark;
  },
  get mdx() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-markdown.js");
    return prettierPlugins.markdown.parsers.mdx;
  },

  // YAML
  get yaml() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-yaml.js");
    return prettierPlugins.yaml.parsers.yaml;
  },

  // Handlebars
  get glimmer() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-glimmer.js");
    return prettierPlugins.glimmer.parsers.glimmer;
  },

  // HTML
  get html() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-html.js");
    return prettierPlugins.html.parsers.html;
  },
  // Vue
  get vue() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-html.js");
    return prettierPlugins.html.parsers.vue;
  },
  // Angular
  get angular() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-html.js");
    return prettierPlugins.html.parsers.angular;
  },
  // Lightning Web Components
  get lwc() {
    importScriptOnce("/sandpack/staic/js/prettier/1.16.4/parser-html.js");
    return prettierPlugins.html.parsers.lwc;
  }
};

importScripts("/sandpack/staic/js/prettier/1.16.4/standalone.js");

self.onmessage = function(event) {
  const message = handleMessage(event.data);
  self.postMessage({
    uid: event.data.uid,
    result: message,
    text: event.data.text
  });
};

function handleMessage(message) {
  var options = message.options || {};

  delete options.ast;
  delete options.doc;
  delete options.output2;

  var plugins = [{ parsers }];
  options.plugins = plugins;

  var response = {
    formatted: formatCode(message.text, options),
    debug: {
      ast: null,
      doc: null,
      reformatted: null
    }
  };

  return response;
}

function formatCode(text, options) {
  try {
    return prettier.format(text, options);
  } catch (e) {
    self.postMessage({ error: e.message, text });
    return undefined
  }
}
