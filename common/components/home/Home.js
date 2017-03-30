import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
// import DocumentMeta from 'react-document-meta';
import { meta as metaObj } from '../../constants/meta';
import ItemBox from '../common_modules/itemBox/ItemBox';

if (!isNode) { require('./home.scss'); }

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

@translate(['common'], { wait: true })
class Home extends Component {

  static locales = [
    'common',
    'home'
  ];

  // static needsApi = [
  //
  // ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    // const { other } = this.state.data;
    const { t } = this.props;
    return (
      <div className="home">
        <DocumentMeta {...this.meta} />
        aa
        {t('home.content')}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
