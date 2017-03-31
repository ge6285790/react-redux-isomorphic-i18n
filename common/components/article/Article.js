import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
import { translate } from 'react-i18next';

// test article

if (!isNode) { require('./article.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@translate(['common', 'article'])
class Article extends Component {

  static locales = [
    'common',
    'article',
    'menu',
  ];

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { t } = this.props;
    return (
      <div className="article">
        {t('article.content')}
        子頁面
      </div>
    );
  }
}

Article.defaultProps = {
  t: () => {},
};

Article.propTypes = {
  t: React.PropTypes.func.isRequired,
  // children: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
