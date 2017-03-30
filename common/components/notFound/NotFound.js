import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isNode from 'detect-node';
import { translate } from 'react-i18next';
// import update from 'react-addons-update';
import DocumentMeta from 'react-document-meta';
import { meta as metaObj } from '../../constants/meta';
// import LazyLoad from 'react-lazyload';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import equal from 'deep-equal';
// import PortfolioItem from './PortfolioItem';

if (!isNode) { require('./notFound.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@translate(['common'], { wait: true })
class NotFound extends Component {

  static locales = [
    'common',
    'notFound',
    'menu',
  ];

  static needsApi = [];

  constructor() {
    super();

    this.state = {};
    this.meta = metaObj;
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <DocumentMeta {...this.meta} />
        {t('notFound.content')}
      </div>
    );
  }
}

NotFound.defaultProps = {
  t: () => {},
};

NotFound.propTypes = {
  t: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
