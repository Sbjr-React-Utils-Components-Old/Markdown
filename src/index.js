import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';

const MARKDOWN_CONFIG = {
  breaks: true, // Convert '\n' in paragraphs into <br>
};

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: MarkdownIt(MARKDOWN_CONFIG),
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
};


export default Markdown;
