import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';

import MARKDOWN_DEFAULT_CONFIG from '../config/markdown';

/**
 * Get a markdown string and return an html string
 * @param content - string to parse
 * @param config - markdown options
 * @return html string parsed
*/
function parseMarkdownToHtml(content, config = MARKDOWN_DEFAULT_CONFIG) {
  return MarkdownIt(config).use(prism).render(content);
}

export default parseMarkdownToHtml;
