import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
import ArticleItem from './ArticleItem';
import Article from './Article';

if (!isNode) { require('./articles.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class Articles extends Component {
  constructor() {
    super();
    this.changeActive = this.changeActive.bind(this);
    this.filterAdd = this.filterAdd.bind(this);
    this.state = {
      data: {
        dataActive: {
          filterTagsShow: false,
        },
        ad: {

        },
        filterTags: [
          'HTML',
          'CSS',
          'Javascript',
          'Node.js',
          '台北',
          '台中',
          '大安區',
          '東區',
          '信義區',
          '松山區',
          '士林區',
        ],
        filter: [],
        list: [
          {
            pid: '1vad',
            title: 'aaa',
            cover: 'http://img05.tooopen.com/images/20160108/tooopen_sy_153700436869.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              'CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: 'safd2',
            title: 'aaaㄅ',
            cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              'CSS',
              'Javascript',
              '松山區',
            ],
            flag: '程式設計',
          },
          {
            pid: '5adsfa',
            title: 'aaa',
            cover: 'http://img02.tooopen.com/images/20160111/tooopen_sy_154043017954.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '1CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: 'sabtfd2',
            title: 'aaaㄅ',
            cover: 'http://blog.mjjq.com/pic/2013/09/2013121145276.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '43CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: '5avvrewedsfa',
            title: 'aaa',
            cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '1CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: '1vafsfd',
            title: 'aaa',
            cover: 'http://img05.tooopen.com/images/20160108/tooopen_sy_153700436869.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              'CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: 'saffvadd2',
            title: 'aaaㄅ',
            cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '43CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: '5adfsvadsfa',
            title: 'aaa',
            cover: 'http://img02.tooopen.com/images/20160111/tooopen_sy_154043017954.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '1CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: 'sabtfdfd2',
            title: 'aaaㄅ',
            cover: 'http://blog.mjjq.com/pic/2013/09/2013121145276.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '43CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
          {
            pid: '5avvrewbdfdedsfa',
            title: 'aaa',
            cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
            desc: 'bbbb',
            link: './article/1',
            date: '2017-1-12',
            tag: [
              '1CSS',
              'Javascript',
              'HTML',
            ],
            flag: '程式設計',
          },
        ],
      },
    };
  }

  componentDidMount() {

  }

  changeActive(flag) {
    const { dataActive } = this.state.data;
    const activeState = dataActive[flag];
    this.setState(update(this.state, {
      data: {
        dataActive: {
          [flag]: { $set: !activeState },
        },
      },
    }));
  }

  filterAdd(tag) {
    this.setState(update(this.state, {
      data: {
        filter: { $push: [tag] },
      },
    }));
  }
  filterRemove(tag) {
    const { filter } = this.state.data;
    const index = filter.indexOf(tag);
    this.setState(update(this.state, {
      data: {
        filter: { $splice: [[index, 1]] },
      },
    }));
  }

  renderFilterTags() {
    const { filterTags, filter } = this.state.data;
    let arrayList = filterTags.map((tag, i) => {
      const active = filter.indexOf(tag) > -1 ? 'true' : 'false';
      return (
        <span
          className="filter-tag"
          data-active={active}
          key={new Date() + i}
          onClick={() => {
            if (active === 'true') {
              this.filterRemove(tag);
              return;
            }
            this.filterAdd(tag);
          }}
        >
          {tag}
          <span>×</span>
        </span>
      );
    });
    arrayList = arrayList.reduce((prev, next) => [prev, '、', next]);
    return arrayList;
  }

  // renderStyle() {
  //   const { filter } = this.state.data;
  //   if (filter.length === 0) {
  //     return;
  //   }
  //   let tags = filter.map(tag => (
  //     `.articles .item[data-tags*="${tag}"]{
  //         display: block;
  //       }`
  //   ));
  //   tags = tags.reduce((prev, next) => `${prev} ${next}`);
  //
  //   return (
  //     <style>
  //       {`.articles .item{
  //         display: none;
  //       }`}
  //       {tags}
  //     </style>
  //   );
  // }

  renderArticles() {
    const { list, filter } = this.state.data;
    const column1 = [];
    const column2 = [];
    const column3 = [];
    let arrayList = list;
    if (filter.length !== 0) {
      arrayList = list.filter((tags) => {
        for (const tag of tags.tag) {
          if (filter.indexOf(tag) >= 0) {
            return true;
          }
        }
        return false;
      });
    }
    arrayList.map((item, i) => {
      if (i % 3 === 0) {
        column1.push(<ArticleItem data={item} key={item.pid} />);
      } else if (i % 3 === 1) {
        column2.push(<ArticleItem data={item} key={item.pid} />);
      } else {
        column3.push(<ArticleItem data={item} key={item.pid} />);
      }
      return item;
    });
    return [
      <span className="column column1" key={new Date() + 1}>{column1}</span>,
      <span className="column column2" key={new Date() + 2}>{column2}</span>,
      <span className="column column3" key={new Date() + 3}>{column3}</span>,
    ];
  }

  renderContent(id) {
    if (!id) {
      const { dataActive } = this.state.data;
      const { filterTagsShow } = dataActive;
      return (
        <div className="articles">
          <div className="articles-filter">
            <div className="filter-tags" data-active={filterTagsShow}>
              <i className="fa fa-tags fa-1" aria-hidden="true" />
              {this.renderFilterTags()}
              <span className="close" onClick={() => { this.changeActive('filterTagsShow'); }}>
                <i className="fa fa-angle-up" />
              </span>
            </div>
            <ul>
              <li data-active="true">
                <span>全部</span>
              </li>
              <li>
                <span>hi話連篇</span>
              </li>
              <li>
                <span>程式設計</span>
              </li>
              <li>
                <span>美食食記</span>
              </li>
              <li className="filter-btn" data-active={filterTagsShow} onClick={() => { this.changeActive('filterTagsShow'); }}>
                <i className="fa fa-tags fa-1" aria-hidden="true" />
                <span>標籤</span>
              </li>
            </ul>
          </div>
          {this.renderArticles()}
        </div>
      );
    }
    return this.props.children;
  }

  render() {
    const { params } = this.props;
    return this.renderContent(params.id);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
