import React from 'react';

const Item = (props) => {
  const { cover, title, desc, link, date, tag, pid } = props.data;
  return (
    <div className="item">
      <a href={link}>
        <div className="paddingBottom bg" style={{ backgroundImage: `url(${cover})` }}></div>
        <div className="itemContent">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="itemInfo clearfix">
            <span className="date">{date}</span>
            <span className="tag">{tag}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
