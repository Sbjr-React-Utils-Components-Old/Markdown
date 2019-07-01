import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

import MARKDOWN_DEFAULT_CONFIG from '../../config/markdown';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: MarkdownIt(props.config),
    };
  }

  createMarkup(children) {
    const { markdown } = this.state;
    return { __html: markdown.render(children) };
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <div dangerouslySetInnerHTML={this.createMarkup(children)} {...rest} /> // eslint-disable-line
    );
  }
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  config: PropTypes.shape(),
};

Markdown.defaultProps = {
  config: MARKDOWN_DEFAULT_CONFIG,
};


export default Markdown;
