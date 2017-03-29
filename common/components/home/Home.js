import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import DocumentMeta from 'react-document-meta';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import equal from 'deep-equal';
import ItemBox from '../common_modules/itemBox/ItemBox';

if (!isNode) { require('./home.scss'); }

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Home extends Component {

  static needsApi = [

  ];

  constructor(props) {
    super(props);
    if(!props.data || props.data.length===0){
      this.state = {
        data: {
          hit: {
            pid: 'aaa',
            title: 'hot',
            url: 'google.com',
            list: [
              {
                pid: '1vadrfsd',
                title: 'aaa',
                cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '0',
              },
              {
                pid: '1vadrfsdwfq',
                title: 'aaa',
                cover: 'http://media.comicbook.com/2016/07/pokemon-go-south-park-191832.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '1',
              },
              {
                pid: '1vasradrfsd',
                title: 'aaa',
                cover: 'http://digitalspyuk.cdnds.net/14/40/768x523/gallery_ustv-south-park-s02e03-chickenlover.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '2',
              },
              {
                pid: '1vasrvqraeadrfsd',
                title: 'aaa',
                cover: 'http://1.bp.blogspot.com/_Fea_Kck-Oeo/TTbrSQ8Ky-I/AAAAAAAAIj0/CrGkcBNFoXk/s1600/31.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '3',
              },
              {
                pid: '1vsvfaasrvqraeadrfsd',
                title: 'aaa',
                cover: 'http://www.billboard.com/files/styles/article_main_image/public/stylus/1228009-south-park-musicians-617-409.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '4',
              },
              {
                pid: '1vsvfasfasrvqraeadrfsd',
                title: 'aaa',
                cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                desc: 'bbbb',
                link: './article/1',
                date: '2017-1-12',
                tag: 'hi',
                index: '5',
              },
            ],
          },
          other: [
            {
              pid: 'asfd',
              title: '鬼話連篇',
              url: 'google.com',
              list: [
                {
                  pid: '1vad',
                  title: 'aaa',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi',
                },
                {
                  pid: 'safd2',
                  title: 'aaaㄅ',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi43',
                },
                {
                  pid: '5adsfa',
                  title: 'aaa',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi1',
                },
              ],
            },
            {
              pid: 'ad11',
              title: '美食食記',
              url: 'google.com',
              list: [
                {
                  pid: 'sd5',
                  title: 'aaa',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi1',
                },
                {
                  pid: 'ads4',
                  title: 'aaaㄅ',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi431',
                },
                {
                  pid: 'nbdfgssf2',
                  title: 'aaaㄅ',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi43',
                },
              ],
            },
            {
              pid: 'ad222',
              title: '程式設計',
              url: 'google.com',
              list: [
                {
                  pid: 'da7',
                  title: 'aaa',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi12',
                },
                {
                  pid: 'svdsa6',
                  title: 'aaaㄅ',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hif431',
                },
                {
                  pid: 'savd2',
                  title: 'aaaㄅ',
                  cover: 'http://www.hollywoodreporter.com/sites/default/files/custom/Meena/south-park-4-EMBED.jpg',
                  desc: 'bbbb',
                  link: './article/1',
                  date: '2017-1-12',
                  tag: 'hi43',
                },
              ],
            },
          ],
        },
      }
    } else {
      this.state = {
        data: props.data
      }
    }

  }

  componentDidMount() {
    const that = this;
    setInterval(function(){
        that.updateSticky();
    },2000);

  }

  updateSticky() {
    const { hit } = this.state.data;
    const length = hit.list.length - 1;
    const arrayList = hit.list.map((item, i) => {
      if (item.index <= 0){
        item.index = length;
        return item;
      }
      item.index = item.index - 1;
      return item;
    });
    this.setState(update(this.state, {
      data: {
        hit: {
          list: {
            $set: arrayList
          }
        }
      }
    }));
  }

  renderItemBox() {
    const { data } = this.state;
    const arrayList = data.other.map(item => {
      return <ItemBox data={item} key={item.pid}/>;
    });
    return arrayList;
  }

  renderHit() {
    const { hit } = this.state.data;
    const length = hit.list.length - 1;
    const arrayList = hit.list.map((item, i) => {
      if(item.index === length){
        return <div className="hit-moveout bg" key={item.pid} style={{backgroundImage: `url(${item.cover})`}}></div>;
      } else if (item.index>3){
        return <div className="hit-disable bg" key={item.pid} style={{backgroundImage: `url(${item.cover})`}}></div>;
      } else {
        return <div className={`hit-number${item.index} bg`} key={item.pid} style={{backgroundImage: `url(${item.cover})`}}></div>;
      }
    });
    return arrayList;
  }

  render() {
    const { other } = this.state.data;
    return (
      <div className="home">
        <div className="hit">
          <LazyLoad throttle={200} height={220}>
            <ReactCSSTransitionGroup
               transitionName="fade"
               transitionAppear={true}
               transitionAppearTimeout={500}
               transitionEnter={false}
               transitionLeave={false}>
              <div className="paddingBottom"></div>
              {this.renderHit()}
            </ReactCSSTransitionGroup>
          </LazyLoad>
        </div>
        {this.renderItemBox()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
