import React from 'react';

const ArticleItem = (props) => {
  const { cover, title, desc, link, date, tag } = props.data;
  const  tags = tag.reduce((prev, next) => `${prev} ${next}`);
  let arrayList = tag.map((item, i) => (
    <span className="tag" key={new Date() + i}><a href="www">{item}</a></span>
  ));
  arrayList = arrayList.reduce((prev, next) => [
    prev,
    <span className="tag" key={new Date() + Math.random()}> / </span>,
    next,
  ]);
  return (
    <div className="item" data-tags={tags}>
      <a href={link}>
        <img alt={title} src={cover} />
      </a>
      <div className="itemContent">
        <a href={link}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </a>
        <div className="itemInfo clearfix">
          <span className="tags">
            <i className="fa fa-tags fa-1" aria-hidden="true" />
            {arrayList}
          </span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
