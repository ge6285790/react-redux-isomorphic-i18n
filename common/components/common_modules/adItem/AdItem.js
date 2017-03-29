import React from 'react';
import isNode from 'detect-node';

if (!isNode){ require('./adItem.scss'); }

const AdItem = (props) => {
  const { cover, link, title, desc } = props.data;
  return (
    <div className="adItem">
      <a href={link}>
        <img src={cover} width="100%" height="auto" />
        <div className="adContent">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default AdItem;
