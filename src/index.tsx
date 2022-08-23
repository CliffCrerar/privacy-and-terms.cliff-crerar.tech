import React from 'react';

import {createRoot} from 'react-dom/client';
import App from './App';
import './index.scss';
// import * as serviceWorker from './serviceWorker';

const scr: HTMLScriptElement = document.createElement('script');
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);


scr.innerHTML = `
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
});
    var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-KRHTS6K');
`

process.env.NODE_ENV === 'production' && document.head.appendChild(scr);

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
