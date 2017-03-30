import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isNode from 'detect-node';
import update from 'react-addons-update';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
// import PortfolioItem from './PortfolioItem';

if (!isNode) { require('./notFound.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class NotFound extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          pid: '1',
          title: '練習',
          link: './portfolio/1',
          desc: '這是練習內容',
          cover: 'https://scotch.io/wp-content/uploads/2016/12/rKVKlx7RxKowxgcunwiA_django-templates-and-static-files.png.jpg',
          date: '2017-1-12',
          technology: [
            'HTML',
            'CSS',
            'Javascript',
          ],
        },
        {
          pid: '2',
          title: '練習2',
          link: './portfolio/1',
          desc: '這是練習內容',
          cover: 'https://scotch.io/wp-content/uploads/2016/12/rKVKlx7RxKowxgcunwiA_django-templates-and-static-files.png.jpg',
          date: '2017-1-12',
          technology: [
            'HTML',
            'CSS',
            'Javascript',
          ],
        },
        {
          pid: '3',
          title: '練習3',
          link: './article/1',
          desc: '這是練習內容',
          cover: 'https://scotch.io/wp-content/uploads/2016/12/rKVKlx7RxKowxgcunwiA_django-templates-and-static-files.png.jpg',
          date: '2017-1-12',
          technology: [
            'HTML',
            'CSS',
            'Javascript',
          ],
        },
      ],
    };
  }

  renderPortfolioItem() {
    const { data } = this.state;
    const arrayList = data.map((item, i) => <PortfolioItem data={item} key={new Date() + i} />);
    return arrayList;
  }

  renderContent(name) {
    if (!name) {
      return (
        <div className="portfolio">
          {/* {this.renderPortfolioItem()} */}
        </div>
      );
    }
    return this.props.children;
  }

  render() {
    const { params } = this.props;
    return this.renderContent(params.name);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
