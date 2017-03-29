import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import { pushState } from 'redux-router';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import equal from 'deep-equal';
import AdminArticleAdd from './AdminArticleAdd';
import AdminArticles from './AdminArticles';
import AdminLogin from './AdminLogin';
import AdminSetting from './AdminSetting';

if (!isNode) { require('./admin.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
    // pushState: bindActionCreators(pushState, dispatch),
  };
}

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  // redirectToSomeUrl() {
  //   // console.log(this,'aaa');
  //   // this.router.transitionTo(`/some/path`);
  //   this.props.pushState(null, '/to/other/route');
  // }

  renderContent(name) {
    switch (name) {
      case 'login':
        return <AdminLogin />;
      case 'setting':
        return <AdminSetting />;
      case 'articles':
        return <AdminArticles {...this.props} />;
      case 'article-add':
        return <AdminArticleAdd />;
      default:
        return <span>呵</span>;
    }
  }

  render() {
    const { params } = this.props;
    return this.renderContent(params.name);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
