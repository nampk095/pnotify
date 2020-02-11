import { modules, modulesPrependContainer } from './PNotifyCore';
import Component, { key, defaults } from './PNotifyButtonsComponent';

Component.key = key;
Component.defaults = defaults;

// Register the module with PNotify.
modules[key] = Component;
// Prepend this module to the container.
modulesPrependContainer.push(Component);
