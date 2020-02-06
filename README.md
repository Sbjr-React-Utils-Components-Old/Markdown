# Sbjr-React-Utils-Components-Old - Markdown

**Legacy !** [See the new version](https://github.com/SbibouJr/Sbjr-React-Utils-Components/tree/master/packages/markdown)

**A Markdown Renderer for react**

![React image](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

## Install

This module is a React component, so [react](https://github.com/facebook/react) is required.
this module use [markdown-it](https://www.npmjs.com/package/markdown-it) and the [markdown-it-prism](https://www.npmjs.com/package/markdown-it-prism) plugin to use [prism](https://prismjs.com), the syntax highlighting library.

### CDN

```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/markdown@latest"></script>
```

### Npm
```bash
npm i -S @sbjr-react-utils-components/markdown
```
## Usage

### Component

```js
import React from 'react';
import { render } from 'react-dom';
import Markdown from '@sbjr-react-utils-components/markdown';

render(
  (
    <Markdown>
      Hello **world**
    </Markdown>
  ),
  document.getElementById('react-container'),
);

```

### Config

This component uses the MarkdownIt lib, you can modify the markdown configuration.

Example:

```js
import React from 'react';
import { render } from 'react-dom';
import Markdown from '@sbjr-react-utils-components/markdown';

// full options list (defaults)
const config = {
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       true,         // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: (/* str, lang */) => '',
};

render(
  (
    <Markdown config={config}>
      Hello **world**
    </Markdown>
  ),
  document.getElementById('react-container'),
);
```

To learn more about the options available -> [github markdown-it](https://github.com/markdown-it/markdown-it)

### Function

The packet also exports a function that returns a string.

Example:

```js
import React from 'react';
import { render } from 'react-dom';
import { parseMarkdownToHtml } from '@sbjr-react-utils-components/markdown';

// full options list (defaults)
const config = {
  breaks: false,
};

const content = 'Hello **world**';

render(
  (
    <div>
      {
        parseMarkdownToHtml(content)
        // OR parseMarkdownToHtml(content, config)
      }

    </div>
  ),
  document.getElementById('react-container'),
);
```

**Have fun.**
