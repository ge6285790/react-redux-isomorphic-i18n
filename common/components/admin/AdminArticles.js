import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class AdminArticles extends Component {
  constructor(props) {
    super(props);
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
            pid: '1',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '2',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '3',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '4',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '5',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '6',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '7',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '8',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '9',
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
            state: '公開',
            view: 10000,
          },
          {
            pid: '10',
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
            state: '公開',
            view: 10000,
          },
        ],
      },
    };
    this.renderArticleItem = this.renderArticleItem.bind(this);
  }

  renderArticleItem() {
    const { list } = this.state.data;
    // const that = this;
    return list.map((item) => {
      const { pid, title, cover, desc, link, date, tag, flag, state, view } = item;
      const tagArray = tag.reduce((prev, next) => [prev, '、', next]);
      return (
        <div className="article-item" key={pid}>
          <span className="id">{pid}</span>
          <span className="img">
            <img alt={title} src={cover} />
          </span>
          <span className="title">{title}</span>
          <span className="desc">{desc}</span>
          <span className="link">複製</span>
          <span className="admin-date">{date}</span>
          <span className="flag">{flag}</span>
          <span className="tags">{tagArray}</span>
          <span className="state">{view}</span>
          <span className="state">{state}</span>
          <span className="state">
            <a href={`/test/admin/article/${pid}`}>編輯</a>
          </span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="admin-articles">
        <div className="article-list">
          <div className="article-item title">
            <span className="id">編號</span>
            <span className="img">圖片</span>
            <span className="title">標題</span>
            <span className="desc">描述</span>
            <span className="link">連結</span>
            <span className="admin-date">日期</span>
            <span className="flag">分類</span>
            <span className="tags">標籤</span>
            <span className="state">觀看</span>
            <span className="state">狀態</span>
            <span className="state">編輯</span>
          </div>
          {this.renderArticleItem()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminArticles);
