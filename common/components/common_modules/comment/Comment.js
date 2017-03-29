import React from 'react';
import isNode from 'detect-node';

if (!isNode) { require('./comment.scss'); }

const Comment = (props) => {
  const { method, action } = props;
  return (
    <div className="comment">
      {/* <textarea /> */}
    </div>
  );
};

export default Comment;
