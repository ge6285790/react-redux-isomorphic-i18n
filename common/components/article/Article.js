import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
import CodeSection from '../common_modules/codeSection/CodeSection';
import ArticleSection from '../common_modules/articleSection/ArticleSection';
import Tag from '../common_modules/tag/Tag';
import Comment from '../common_modules/comment/Comment';
import AdItem from '../common_modules/adItem/AdItem';

// test article
import test from '../common_modules/articleSection/test';

if (!isNode) { require('./article.scss'); }

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class Article extends Component {
  constructor() {
    super();

    this.state = {
      windowWidth: isNode ? '' : document.body.offsetWidth,
      data: {
        pid: '1',
        title: 'AAA',
        desc: 'egrfsd',
        date: '2017-1-12',
        state: 'auto',
        tags: [
          'CSS',
          'Javascript',
          'cccc',
          'ergqr',
        ],
        fbbn: '',
        banner: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
        content: [
          {
            flag: 'article',
            context: test, // markdown
          },
          {
            flag: 'code',
            context: [
              ['function', 'purple'],
              ['mapStateToProps', 'blue', 1],
              ['() {'],
              [],
              ['return ', 'purple', '2'],
              ['{}'],
              [],
              ['}'],
              [],
              [],
              ['class', 'purple'],
              [' Article', 'yellow'],
              [' extends', 'purple'],
              [' Component', 'yellow'],
              [' {'],
            ],
          },
        ],
        ad: {
          google: [],
          myRecommon: [
            {
              cover: 'http://d.pr/i/9HM6+',
              link: 'google.com',
              title: 'aaaaaaaa',
              desc: 'bbbbbb',
            },
            {
              cover: 'http://d.pr/i/9HM6+',
              link: 'google.com',
              title: 'aaaaaaaa1',
              desc: 'bbbbbb',
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    if (isNode) {
      return;
    }

    const element = document.querySelectorAll('[data-indent]');
    for(let ele of element) {
      const indent = ele.dataset.indent;
      ele.style.textIndent = `${indent}em`;
    }
    let windowWidth = document.body.offsetWidth;
    const myRecommon = document.querySelector('.myRecommon');
    const myRecommonTop = myRecommon.offsetTop;
    const body = document.body;
    document.onscroll = () => {
      if (body.scrollTop >= myRecommonTop && !myRecommon.classList.contains('fixTop') && this.state.windowWidth === document.body.offsetWidth) {
        myRecommon.classList.add('fixTop');
        myRecommon.style.left = (document.querySelector('.recommon').getBoundingClientRect().left + 12) + 'px';
        myRecommon.style.width = (document.querySelector('.recommon').offsetWidth - 24) + 'px';
        myRecommon.style.top = '0px';
        return;
      } else if (this.state.windowWidth !== document.body.offsetWidth && body.scrollTop >= myRecommonTop) {
        myRecommon.classList.add('fixTop');
        myRecommon.style.left = (document.querySelector('.recommon').getBoundingClientRect().left + 12) + 'px';
        myRecommon.style.width = (document.querySelector('.recommon').offsetWidth - 24) + 'px';
        myRecommon.style.top = '0px';
        return;
      }
      if (body.scrollTop < myRecommonTop && myRecommon.classList.contains('fixTop')) {
        myRecommon.classList.remove('fixTop');
        myRecommon.style.left = '0%';
        myRecommon.style.width = '100%';
      }
    };
  }

  renderContent() {
    const { content } = this.state.data;
    const arrayList = content.map((item, i) => {
      switch (item.flag) {
        case 'article':
          return <ArticleSection data={item.context} key={new Date() + i} />;
        case 'code':
          return <CodeSection data={item.context} key={new Date() + i} />;
        default:
          return '';
      }
    });
    return arrayList;
  }

  renderAdContent() {
    const { google, myRecommon } = this.state.data.ad;
    let googleList = google.map((item, i) => <AdItem data={item} key={new Date() + i} />);


    googleList = <div className="recommonBox" key={new Date() + Math.random()}>{googleList}</div>;

    let myRecommonList = myRecommon.map((item, i) => <AdItem data={item} key={new Date() + i} />);

    myRecommonList = <div className="recommonBox myRecommon" key={new Date() + Math.random()}>{myRecommonList}</div>;


    return [googleList, myRecommonList];
  }

  render() {
    const { title, date, tags, banner } = this.state.data;
    return (
      <div className="article">
        <div className="content">
          <img className="banner" src={banner} alt={title} />
          {this.renderContent()}
          <section>
            <Tag data={tags} />
            <span className="float-right date">{date}</span>
          </section>
          <section>
            <Comment />
          </section>
        </div>
        <div className="recommon">
          {this.renderAdContent()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
