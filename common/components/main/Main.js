import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import isNode from 'detect-node';
import Menu from '../common_modules/menu/Menu';

if (!isNode) { require('./main.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        menu: [
          {
            title: '首頁',
            iconClassName: 'fa fa-home',
            link: '/',
          },
          {
            title: '文章',
            iconClassName: 'fa fa-file-text-o',
            link: '/article',
          },
          {
            title: '作品',
            iconClassName: 'fa fa-suitcase',
            link: '/portfolio',
          },
          {
            title: '關於我',
            iconClassName: 'fa fa-id-card-o',
            link: '/about',
          },
        ],
      }
    };
  }

  render() {
    const { menu } = this.state.data;
    return (
      <div>
        <Menu data={menu}/>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
