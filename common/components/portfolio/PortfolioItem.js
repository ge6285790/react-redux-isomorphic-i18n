import React from 'react';

const PortfolioItem = (props) => {
  const { title, link, desc, cover, date, technology } = props.data;
  const tech = technology.reduce((prev, next) => [prev, '、', next]);
  return (
    <div className="portfolioItem">
      <a href={link}>
        <div className="portfolioCover">
          <div className="paddingBottom bg" style={{ backgroundImage: `url(${cover})` }} />
        </div>
        <div className="portfolioContent">
          <div className="title">{title}</div>
          <div className="desc">
            <p>{desc}</p>
          </div>
          <div className="info">
            <div className="date">{date}</div>
            <div className="technology"><i className="fa fa-wrench" />{tech}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
