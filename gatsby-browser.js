import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
// import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-twilight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './src/prism-cb.css';
import wrapRootElementWithTheme from './src/wrapRootElement.tsx';

library.add(faGithub, faTwitter, faExternalLinkAlt);

export const wrapRootElement = wrapRootElementWithTheme;
