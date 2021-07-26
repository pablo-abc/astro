import { createComponent, createRoot } from 'solid-js';
import { hydrate } from 'solid-js/web';

export default (element) => (Component, props, childHTML) => {
  const children = document.createElement('astro-fragment');
  children.innerHTML = childHTML;
  hydrate(() => createComponent(Component, { ...props, children }), element);
};
