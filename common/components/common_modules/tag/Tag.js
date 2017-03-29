import React from 'react';
import isNode from 'detect-node';

if (!isNode) { require('./tag.scss'); }

const Tag = (props) => {
  const { data } = props;
  let arrayList = data.map((item, i) => <span className="tag" key={new Date() + i}><a href="www">{item}</a></span>);
  console.log('arrayList', arrayList);
  arrayList = arrayList.reduce((prev, next) => [prev, <span className="tag" key={new Date() + Math.random()}> / </span>, next]);
  console.log('arrayList', arrayList);

  return (
    <span>
      <i className="fa fa-tags fa-1" aria-hidden="true" />
      {arrayList}
    </span>
  );
};

export default Tag;
