# Sbjr-React-Utils-Components - Markdown

**A Markdown Renderer for react**

![React image](https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png)

## Install

This module is a React component, so you must obviously have [react](https://github.com/facebook/react) installed.

### CDN

```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/markdown@latest"></script>
```

### Npm
```bash
npm i -S @sbjr-react-utils-components/markdown
```
## Usage

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

**Have fun.**
