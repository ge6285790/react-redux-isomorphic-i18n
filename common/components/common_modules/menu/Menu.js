import React from 'react';
import isNode from 'detect-node';
import { translate } from 'react-i18next';

if (!isNode) { require('./menu.scss'); }

@translate(['common'], { wait: true })
class Menu extends React.Component {

  renderMenu() {
    const { data } = this.props;
    return data.map((item, i) => {
      return (
        <li className="menu-side-link" key={new Date() + i}>
          <a href={item.link}>
            <i className={item.iconClassName} />
            {/* <span>Home</span> */}
            <span>{item.title}</span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="menu-side">
        <ul>
          {this.renderMenu()}
          <li className="menu-side-btn marginLeft">
            <i className="fa fa-facebook-official" />
          </li>
          <li className="menu-side-btn">
            <i className="fa fa-rss" />
          </li>
          <li className="menu-side-btn">
            <i className="fa fa-comments-o" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
