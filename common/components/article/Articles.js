import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
import { translate } from 'react-i18next';
import Article from './Article';

if (!isNode) { require('./articles.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@translate(['common', 'article'])
class Articles extends Component {
  static locales = [
    'common',
    'article',
    'menu',
  ];

  constructor() {
    super();
    this.state = {};
  }

  renderContent(id) {
    if (!id) {
      const { t } = this.props;
      return (
        <div>
          {t('article.content')}
          <a href="/article/test">子頁面連結</a>
        </div>
      );
    }
    return <Article />;
  }

  render() {
    const { params } = this.props;
    return this.renderContent(params.id);
  }
}

Articles.defaultProps = {
  t: () => {},
};

Articles.propTypes = {
  t: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
