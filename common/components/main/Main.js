import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { translate } from 'react-i18next';
import DocumentMeta from 'react-document-meta';
import isNode from 'detect-node';
import Menu from '../common_modules/menu/Menu';
import { meta as metaObj } from '../../constants/meta';

if (!isNode) { require('./main.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@translate(['common', 'menu'])
class Main extends Component {

  // static locales = [
  //   'common',
  //   'menu',
  // ];

  static needsApi = [];

  constructor(props) {
    super(props);
    const { t } = props;
    this.state = {
      data: {
        menu: [
          {
            title: t('menu.home'),
            iconClassName: 'fa fa-home',
            link: '/',
          },
          {
            title: t('menu.article'),
            iconClassName: 'fa fa-file-text-o',
            link: '/article',
          },
          {
            title: t('menu.portfolio'),
            iconClassName: 'fa fa-suitcase',
            link: '/portfolio',
          },
          {
            title: t('menu.about'),
            iconClassName: 'fa fa-id-card-o',
            link: '/about',
          },
        ],
      },
    };
    this.meta = metaObj;
  }

  langChange(lang) {
    /* eslint no-undef: [0, { "reactCookie": true }] */
    /* eslint-env browser */

    reactCookie.save('isomorphicI18nextLang', lang, {
      path: '/',
    });

    location.reload();
  }

  render() {
    const { menu } = this.state.data;

    return (
      <div>
        <DocumentMeta {...this.meta} />
        <Menu data={menu} />
        <div className="i18n-switcher">
          <div
            onClick={() => {
              this.langChange('zh');
            }}
          >
            中文
          </div>
          <div
            onClick={() => {
              this.langChange('en');
            }}
          >
            EN
          </div>
        </div>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  t: () => {},
};

Main.propTypes = {
  t: React.PropTypes.func.isRequired,
  children: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
