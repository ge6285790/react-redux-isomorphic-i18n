import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isNode from 'detect-node';
import { translate } from 'react-i18next';
// import update from 'react-addons-update';
import DocumentMeta from 'react-document-meta';
// import LazyLoad from 'react-lazyload';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import equal from 'deep-equal';
import PortfolioItem from './PortfolioItem';
import { meta as metaObj } from '../../constants/meta';

if (!isNode) { require('./portfolio.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@translate(['common', 'portfolio'])
class Portfolio extends Component {

  static locales = [
    'common',
    'portfolio',
    'menu',
  ];

  static needsApi = [];

  constructor() {
    super();

    this.state = {};
    this.meta = metaObj;
  }

  renderPortfolioItem() {
    return <PortfolioItem />;
  }

  renderContent(name) {
    const { t } = this.props;
    if (!name) {
      return (
        <div className="portfolio">
          <DocumentMeta {...this.meta} />
          {t('portfolio.content')}
          {this.renderPortfolioItem()}
        </div>
      );
    }
    return '';
  }

  render() {
    const { params } = this.props;
    return this.renderContent(params.name);
  }
}

Portfolio.defaultProps = {
  t: () => {},
  children: () => {},
};

Portfolio.propTypes = {
  t: React.PropTypes.func.isRequired,
  // children: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
