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

class AdminSetting extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        allArticleID: [
          {
            pid: 1,
            title: 'aaaa',
          },
          {
            pid: 2,
            title: 'aaaa',
          },
          {
            pid: 3,
            title: 'aaaa',
          },
          {
            pid: 4,
            title: 'aaaa',
          },
          {
            pid: 5,
            title: 'aaaa',
          },
          {
            pid: 6,
            title: 'aaaa',
          },
          {
            pid: 7,
            title: 'aaaa',
          },
        ],
        slider: [
          {
            pid: 1,
            title: 'aaaa',
          },
          {
            pid: 2,
            title: 'aaaa',
          },
          {
            pid: 3,
            title: 'aaaa',
          },
          {
            pid: 4,
            title: 'aaaa',
          },
          {
            pid: 5,
            title: 'aaaa',
          },
        ],
        menu: [
          {
            title: '首頁',
            iconClassName: 'fa fa-home',
            link: '/',
          },
          {
            title: '文章',
            iconClassName: 'fa fa-file-text-o',
            link: '/article',
          },
          {
            title: '作品',
            iconClassName: 'fa fa-suitcase',
            link: '/portfolio',
          },
          {
            title: '關於我',
            iconClassName: 'fa fa-id-card-o',
            link: '/about',
          },
        ],
        meta: [
          {
            title: 'aaaa',
            content: 'bbbb',
            fbbn: 'vvvvvvv',
          },
          {
            title: 'aaaa',
            content: 'bbbb',
            fbbn: 'vvvvvvv',
          },
          {
            title: 'aaaa',
            content: 'bbbb',
            fbbn: 'vvvvvvv',
          },
          {
            title: 'aaaa',
            content: 'bbbb',
            fbbn: 'vvvvvvv',
          },
        ],
        recommon: {
          absolute: [
            'aaaaaaa',
            'bbbbbbb',
          ],
        },
      },
    };
  }

  sliderUpdate(value, index) {
    const [ pid, title ] = value.split(' ');
    this.setState(update(this.state, {
      data: {
        slider: {
          [index]: {
            pid: { $set: pid },
            title: { $set: title },
          },
        },
      },
    }));
  }

  sliderCreate() {
    this.setState(update(this.state, {
      data: {
        slider: {
          $push: [
            {
              pid: '',
              title: '',
            },
          ],
        },
      },
    }));
  }

  metaUpdate(value, type, index) {
    this.setState(update(this.state, {
      data: {
        meta: {
          [index]: {
            [type]: { $set: value },
          },
        },
      },
    }));
  }

  menuUpdate(value, type, index) {
    this.setState(update(this.state, {
      data: {
        menu: {
          [index]: {
            [type]: { $set: value },
          },
        },
      },
    }));
  }

  menuCreate() {
    this.setState(update(this.state, {
      data: {
        menu: {
          $push: [
            {
              title: '',
              iconClassName: '',
              link: '',
            },
          ],
        },
      },
    }));
  }

  menuDelete(index) {
    this.setState(update(this.state, {
      data: {
        menu: {
          $splice: [
            [index, 1]
          ],
        },
      },
    }));
  }

  recommonUpdate(value, index) {
    this.setState(update(this.state, {
      data: {
        recommon: {
          absolute: {
            [index]: { $set: value },
          },
        },
      },
    }));
  }

  renderSlider() {
    const { slider, allArticleID } = this.state.data;
    const allArticleIDArray = allArticleID.map((item, i) => {
      return <option key={new Date() + i}>{`${item.pid} ${item.title}`}</option>;
    });
    return slider.map((item, i) => {
      const { pid, title } = item;
      return (
        <div key={new Date() + i} className="slider">
          <span>編號ID：{pid}，</span>
          <span>標題：{title} </span>
          <select onChange={(e) => { this.sliderUpdate(e.target.value, i) }}>
            {allArticleIDArray}
          </select>
        </div>
      );
    });
  }

  renderMenu() {
    const { menu } = this.state.data;
    return menu.map((item, i) => {
      return (
        <div key={'renderMenu' + i}>
          <input type="text" placeholder="標題" value={item.title} onChange={(e) => { this.menuUpdate(e.target.value, 'title', i); }} />
          <input type="text" placeholder="連結" value={item.link} onChange={(e) => { this.menuUpdate(e.target.value, 'link', i); }} />
          <input type="text" placeholder="icon class" value={item.iconClassName} onChange={(e) => { this.menuUpdate(e.target.value, 'iconClassName', i); }} />
          <span className="close" onClick={() => { this.menuDelete(i) }} > ×</span>
        </div>
      )
    });
  }

  renderRecommon() {
    const { absolute } = this.state.data.recommon;
    return absolute.map((item, i) => {
      return <input type="text" key={'renderRecommon' + i} value={item} onChange={(e) => { this.recommonUpdate(e.target.value, i); }} />
    });
  }

  renderMeta() {
    const { meta } = this.state.data;
    const className = ['homeMeta', 'articleMeta', 'portfolioMeta', 'aboutMeta'];
    const name = ['首頁Meta', '文章Meta', '作品Meta', '關於我Meta'];
    return meta.map((item, i) => {
      return (
        <div className={className[i]} key={'renderMeta' + i} >
          <h4>{name[i]}</h4>
          <h5>標題</h5>
          <input type="text" value={item.title} onChange={(e) => { this.metaUpdate(e.target.value, 'title', i); }} />
          <h5>內容</h5>
          <input type="text" value={item.content} onChange={(e) => { this.metaUpdate(e.target.value, 'content', i); }} />
          <h5>fb圖片</h5>
          <input type="file" />
          <br />
          <input type="text" value={item.fbbn} onChange={(e) => { this.metaUpdate(e.target.value, 'fbbn', i); }} />
        </div>
      )
    });
  }

  render() {
    return (
      <div className="admin-setting">
        <div className="content">
          <div className="sliderSetting">
            <h4>首頁Slider</h4>
            {this.renderSlider()}
            <div className="addBtn" onClick={::this.sliderCreate}>新增</div>
          </div>
          <div className="metaSetting">
            {this.renderMeta()}
          </div>
          <div className="menuSetting">
            <h4>menu區塊</h4>
            {this.renderMenu()}
            <div className="addBtn" onClick={::this.menuCreate}>新增</div>
          </div>
          <div className="adSetting">
            <h4>廣告連結</h4>
            {this.renderRecommon()}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSetting);
