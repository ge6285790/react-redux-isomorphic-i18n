import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import isNode from 'detect-node';
import equal from 'deep-equal';
import $ from 'jquery';
import moment from 'moment';

// test article
import test from '../common_modules/articleSection/test';

let fullcalendar;
if (!isNode) {
  fullcalendar = require('fullcalendar');
  require('./admin.scss');
  require('fullcalendar/dist/fullcalendar.css');
}

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
    //   data: {
    //     calendar: false,
    //     flags: ['程式設計', 'hi話連篇', '美食食記'],
    //     filterTags: [
    //       'HTML',
    //       'CSS',
    //       'Javascript',
    //       'Node.js',
    //       '台北',
    //       '台中',
    //       '大安區',
    //       '東區',
    //       '信義區',
    //       '松山區',
    //       '士林區',
    //     ],
    //     recommon: {
    //       absolute: [
    //         'aaaaaaa',
    //         'bbbbbbb',
    //       ],
    //       tags: [
    //         'Node.js'
    //       ]
    //     },
    //     pid: '1',
    //     title: 'AAA',
    //     date: '2017-01-12',
    //     desc: 'egrfsd',
    //     flag: '程式設計',
    //     state: {
    //       auto: true,
    //       hide: false,
    //       publish: false,
    //     },
    //     tags: [
    //       'CSS',
    //       'Javascript',
    //     ],
    //     fbbn: '',
    //     banner: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
    //     content: [
    //       {
    //         flag: 'article',
    //         context: test, // markdown
    //       },
    //       {
    //         flag: 'code',
    //         context: [
    //           ['function', 'purple'],
    //           ['mapStateToProps', 'blue', 1],
    //           ['() {'],
    //           [],
    //           ['return ', 'purple', '2'],
    //           ['{}'],
    //           [],
    //           ['}'],
    //           [],
    //           [],
    //           ['class', 'purple'],
    //           [' Article', 'yellow'],
    //           [' extends', 'purple'],
    //           [' Component', 'yellow'],
    //           [' {'],
    //         ],
    //       },
    //     ],
    //     ad: {
    //       google: [],
    //       myRecommon: [
    //         {
    //           cover: 'http://d.pr/i/9HM6+',
    //           link: 'google.com',
    //           title: 'aaaaaaaa',
    //           desc: 'bbbbbb',
    //         },
    //         {
    //           cover: 'http://d.pr/i/9HM6+',
    //           link: 'google.com',
    //           title: 'aaaaaaaa1',
    //           desc: 'bbbbbb',
    //         },
    //       ],
    //     },
    //   },
    // };
    data: {
      calendar: false,
      flags: [],
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
      recommon: {
        absolute: [],
        tags: []
      },
      pid: '',
      title: '',
      date: '',
      desc: '',
      flag: '',
      state: {
        auto: false,
        hide: false,
        publish: false,
      },
      tags: [],
      fbbn: '',
      banner: '',
      content: [],
      ad: {
        google: [],
        myRecommon: [
          {
            cover: '',
            link: '',
            title: '',
            desc: '',
          },
          {
            cover: '',
            link: '',
            title: '',
            desc: '',
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
    const that = this;
    $('#calendar').fullCalendar({
      dayClick: function() {
        console.log('---');
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek',
      },
      defaultDate: this.state.data.date || new Date(),
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: (start, end) => {
        // console.log(start, end);
        // var title = prompt('Event Title:');
        // var eventData;
        // if (title) {
        //   eventData = {
        //     title: title,
        //     start: start,
        //     end: end
        //   };
        //   $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        // }
        // $('#calendar').fullCalendar('unselect');
        //
        //
        // console.log(start, end);
        that.setState(update(that.state, {
          data: {
            date: { $set: moment(start._d).format('YYYY - MM - DD') },
            calendar: { $set: false },
          },
        }));
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2016-12-01',
        },
        {
          title: 'Long Event',
          start: '2016-12-07',
          end: '2016-12-10',
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-12-09T16:00:00',
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-12-16T16:00:00',
        },
        {
          title: 'Conference',
          start: '2016-12-11',
          end: '2016-12-13',
        },
        {
          title: 'Meeting',
          start: '2016-12-12T10:30:00',
          end: '2016-12-12T12:30:00',
        },
        {
          title: 'Lunch',
          start: '2016-12-12T12:00:00',
        },
        {
          title: 'Meeting',
          start: '2016-12-12T14:30:00',
        },
        {
          title: 'Happy Hour',
          start: '2016-12-12T17:30:00',
        },
        {
          title: 'Dinner',
          start: '2016-12-12T20:00:00',
        },
        {
          title: 'Birthday Party',
          start: '2016-12-13T07:00:00',
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-12-28'
        },
      ],
   });
   $('#calendar').hide();
  }

  getTextContent(item, index) {
    if (item.flag==='article') {
      return [
        <h5 className="text-right">文字區塊</h5>,
        <textarea value={item.context} onChange={(e) => { this.updateArticle(e.target.value, index); }} />,
      ];
    }
    if (item.flag==='code') {
      return [
        <h5 className="text-right">程式區塊</h5>,
        <textarea value={JSON.stringify(item.context)} onChange={(e) => { this.updateArticle(JSON.parse(e.target.value), index); }} />,
      ];
    }
  }

  addTextContent(type) {
    if (type === 'article') {
      this.setState(update(this.state, {
        data: {
          content: {
            $push: [
              {
                flag: type,
                content: '',
              },
            ],
          },
        },
      }));
    }
    if (type === 'code') {
      this.setState(update(this.state, {
        data: {
          content: {
            $push: [
              {
                flag: type,
                content: [],
              },
            ],
          },
        },
      }));
    }
  }

  updateState(type) {
    this.setState(update(this.state, {
      data: {
        state: { $set: {
          auto: type === 'auto',
          hide: type === 'hide',
          publish: type === 'publish',
        } },
      },
    }));
  }

  updateFlag(type) {
    this.setState(update(this.state, {
      data: {
        flag: { $set: type },
      },
    }));
  }

  updateTag(tag, type) {
    const { tags } = this.state.data;
    if (type === 'push') {
      if (tags.indexOf(tag) >= 0) {
        return;
      }
      this.setState(update(this.state, {
        data: {
          tags: { $push: [tag] },
        },
      }));
    }
    if (type === 'remove') {
      this.setState(update(this.state, {
        data: {
          tags: { $splice: [[tags.indexOf(tag), 1]] },
        },
      }));
    }
  }

  updateRecommonTag(tag, type) {
    const { tags } = this.state.data.recommon;

    if (type === 'push') {
      if (tags.indexOf(tag)>=0) {
        return;
      }
      this.setState(update(this.state, {
        data: {
          recommon: {
            tags: { $push: [tag] },
          },
        },
      }));
    }
    if (type === 'remove') {
      this.setState(update(this.state, {
        data: {
          recommon: {
            tags: { $splice: [[tags.indexOf(tag), 1]] },
          },
        },
      }));
    }
  }

  updateText(text, state) {
    this.setState(update(this.state, {
      data: {
        [state]: { $set: text },
      },
    }));
  }

  updateArticle(text, index) {
    this.setState(update(this.state, {
      data: {
        content: {
          [index]: {
            context: { $set: text },
          },
        },
      },
    }));
  }

  updateRecommonAbsolute(text, index) {
    this.setState(update(this.state, {
      data: {
        recommon: {
          absolute: {
            [index]: { $set: text },
          },
        },
      },
    }));
  }

  renderTextContent(type) {
    const { content } = this.state.data;
    const arrayList = content.map((item, i) => {
      return this.getTextContent(item, i);
    });
    return arrayList;
  }

  renderRadio() {
    const { state } = this.state.data;
    return (
      <div key={'publishState'}>
        <input type="radio" onChange={() => {this.updateState('publish'); }} checked={state.publish} />
        <label>發佈</label>
        <input type="radio" onChange={() => {this.updateState('hide'); }} checked={state.hide} />
        <label>隱藏</label>
        <input type="radio" onChange={() => {this.updateState('auto'); }} checked={state.auto} />
        <label>自動</label>
      </div>
    );
  }

  renderFlagTags() {
    const { flags, flag } = this.state.data;
    return flags.map((item, i) => {
      const checked = item === flag;
      return (
        <span key={new Date() + i}>
          <input type="radio" checked={checked} onChange={() => { this.updateFlag(item); }} />
          <label>{item}</label>
        </span>
      );
    })
  }

  renderTags() {
    const { tags } = this.state.data;
    if (tags.length === 0) {
      return;
    }
    let arrayList = tags.map((item, i) => {
      return <span
        className="item-tag"
        key={new Date() + i}
        onClick={() => { this.updateTag(item, 'remove') }}
      >
        {item}
        <span>×</span>
      </span>;
    });
    arrayList = arrayList.reduce((prev, next) => {
      return [prev, '、', next];
    });
    return arrayList;
  }

  renderRecommonTags() {
    const { tags } = this.state.data.recommon;
    if (tags.length === 0) {
      return;
    }
    let arrayList = tags.map((item, i) => {
      return <span
        className="item-tag"
        key={new Date() + i}
        onClick={() => { this.updateRecommonTag(item, 'remove') }}
      >
        {item}
        <span>×</span>
      </span>;
    });
    arrayList = arrayList.reduce((prev, next) => {
      return [prev, '、', next];
    });
    return arrayList;
  }

  renderTagsOption() {
    const { filterTags } = this.state.data;
    const arrayList = filterTags.map((item, i) => {
      return <option key={new Date() + i}>{item}</option>
    });
    return (
      <select onChange={(e) => { this.updateTag(e.target.value, 'push') }}>
        <option>請選擇</option>
        {arrayList}
      </select>
    );
  }

  renderRecommonTagsOption() {
    const { filterTags } = this.state.data;
    const arrayList = filterTags.map((item, i) => {
      return <option key={new Date() + i}>{item}</option>
    });
    return (
      <select onChange={(e) => { this.updateRecommonTag(e.target.value, 'push') }}>
        <option>請選擇</option>
        {arrayList}
      </select>
    );
  }

  render() {
    const { title, date, tags, banner, fbbn, desc } = this.state.data;
    return (
      <div className="admin-article-editor">
        <div className="content">
          <div className="banner clearfix">
            <div className="bn">
              <h4>Banner 上傳</h4>
              <img src={banner} />
              <br/>
              <input type="file" />
            </div>
            <div className="fbbn">
              <h4>Fb 分享圖上傳</h4>
              <img src={fbbn} />
              <br/>
              <input type="file" />
            </div>
            <div className="img">
              <h4>圖片上傳</h4>
              <img src={fbbn} />
              <br/>
              <input type="file" />
            </div>
          </div>
          <div className="clearfix">
            <div className="container">
              <div className="title">
                <h4>文章標題</h4>
                <input type="text" value={title} onChange={(e) => { this.updateText(e.target.value, 'title'); }} />
              </div>
              <div className="desc">
                <h4>文章描述</h4>
                <textarea value={desc} onChange={(e) => { this.updateText(e.target.value, 'desc'); }} />
              </div>
              <div className="text-content">
                <h4>文章內文</h4>
                {this.renderTextContent()}
                <span className="articleBtn" onClick={() => { this.addTextContent('article'); }}>新增文字區塊</span>
                <span className="codeBtn" onClick={() => { this.addTextContent('code'); }}>新增程式區塊</span>
              </div>
            </div>
            <div className="info">
              <div className="flag">
                <h4>文章分類</h4>
                {this.renderFlagTags()}
              </div>
              <div className="tag">
                <h4>文章標籤</h4>
                <div>
                  {/* <input
                    type="text"
                    value={tags.reduce((prev, next) => `${prev}、${next}`)}
                    onChange={() => {}}
                  /> */}
                  {this.renderTags()}
                  {this.renderTagsOption()}
                </div>
                <div>
                  <input type="text" ref={(e) => { this.createNewTagInput = e; }} />
                  <span
                    className="createNewTag"
                    onClick={() => { this.setState(update(this.state, {
                      data: {
                        filterTags: {
                          $push: [this.createNewTagInput.value],
                        },
                        tags: {
                          $push: [this.createNewTagInput.value],
                        },
                      },
                    }));
                      this.createNewTagInput.value = '';
                    }}
                  >
                    新增標籤
                  </span>
                </div>
              </div>
              <div className="recommon">
                <h4>推薦</h4>
                <div>
                  <div>
                    <label>指定網址1:</label>
                    <input type="text" value={this.state.data.recommon.absolute[0]} onChange={(e) => { this.updateRecommonAbsolute(e.target.value, 0); }} />
                  </div>
                  <div>
                    <label>指定網址2:</label>
                    <input type="text" value={this.state.data.recommon.absolute[1]} onChange={(e) => { this.updateRecommonAbsolute(e.target.value, 1); }} />
                  </div>
                </div>
                <div>
                  <label>類型推薦：</label>
                  {this.renderRecommonTags()}
                  {this.renderRecommonTagsOption()}
                </div>
              </div>
              <div className="publishState">
                <h4>發佈時間</h4>
                <div>
                  <div>
                    <span>{date}</span>
                  </div>
                  <div className="selectDateBtn" onClick={() => { this.setState(update(this.state, { data: { calendar: { $set: true } } })); }}>選擇時間</div>
                </div>
                {this.renderRadio()}
              </div>
            </div>
          </div>
        </div>
        <div id="calendar" data-active={this.state.data.calendar}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
