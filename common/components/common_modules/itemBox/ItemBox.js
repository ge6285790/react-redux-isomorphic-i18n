import React from 'react';
import Item from './Item';
import isNode from 'detect-node';

if (!isNode) { require('./itemBox.scss'); }

const ItemBox = (props) => {
  const { title, url, list, pid } = props.data;
  const arrayList = list.map(item => {
    return <Item data={item} key={item.pid} />
  });

  return (
    <div className="itemBox">
      <h3>
        <span>
          {title}
        </span>
        <span className="more">
          <a href={url}>更多</a>
        </span>
      </h3>
      <div className="itemList">
        {arrayList}
      </div>
      {/* <div className="itemList">
        <div className="item">
          <div className="paddingBottom bg" style={{backgroundImage: `url(https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg);`}}></div>
          <div className="itemContent">aaa</div>
        </div>
        <div className="item">
          <div className="paddingBottom bg" style={{backgroundImage: `url(https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg);`}}></div>
          <div className="itemContent">aaa</div>
        </div>
        <div className="item">
          <div className="paddingBottom bg" style={{backgroundImage: `url(https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg);`}}></div>
          <div className="itemContent">aaa</div>
        </div>
      </div> */}
    </div>
  );
};

export default ItemBox;
