import React, { Component } from 'react';
import isNode from 'detect-node';
import ReactMarkdown from 'react-markdown';

if (!isNode) { require('./articleSection.scss'); }

// class ArticleSection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: test,
//     };
//   }
//
//   render() {
//     return (
//       <section className="article-section">
//         <ReactMarkdown source={this.state.data} />
//       </section>
//     );
//   }
// }

const ArticleSection = (props) => {
  const { data } = props;
  return (
    <section className="article-section">
      <ReactMarkdown source={data} />
    </section>
  );
};

export default ArticleSection;
