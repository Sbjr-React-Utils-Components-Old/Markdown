# Sbjr-React-Utils-Components - Markdown

**A Markdown Renderer for react**

## Install

**CDN :**
```js
<script type="text/javascript" src="https://unpkg.com/@sbjr-react-utils-components/markdown@latest"></script>
```

**npm :**
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
