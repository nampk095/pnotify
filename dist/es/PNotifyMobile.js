import { modules } from './PNotifyCore';
import Component, { key, defaults } from './PNotifyMobileComponent';

Component.key = key;
Component.defaults = defaults;

// Register the module with PNotify.
modules[key] = Component;

Component.factory = (notice, options) => new Component({ target: document.body, props: options });
