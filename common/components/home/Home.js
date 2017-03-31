import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
// import LazyLoad from 'react-lazyload';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import equal from 'deep-equal';
// import DocumentMeta from 'react-document-meta';
import { meta as metaObj } from '../../constants/meta';

if (!isNode) { require('./home.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

// @translate(['common'], { wait: true })
@translate(['common', 'home'])
class Home extends Component {

  static locales = [
    'common',
    'home',
    'menu',
  ];

  static needsApi = [];

  constructor(props) {
    super(props);
    this.state = {};
    this.meta = metaObj;
  }

  componentDidMount() {
  }

  render() {
    // const { other } = this.state.data;
    const { t } = this.props;
    return (
      <div className="home">
        <DocumentMeta {...this.meta} />
        {t('home.content')}
      </div>
    );
  }
}

Home.defaultProps = {
  t: () => {},
};

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
  // children: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
