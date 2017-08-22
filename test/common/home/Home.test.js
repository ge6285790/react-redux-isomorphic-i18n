import React from 'react';
import { mount } from 'enzyme';
import update from 'immutability-helper';
import Home from '../../../common/components/home/Home';

const coverUrl = 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg';
const testData = {
  hit: {
    pid: 'aaa',
    title: 'hot',
    url: 'google.com',
    list: [
      {
        pid: '1vadrfsd',
        title: 'aaa',
        cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '0',
      },
      {
        pid: '1vadrfsdwfq',
        title: 'aaa',
        cover: 'https://scotch.io/wp-content/uploads/2016/12/rKVKlx7RxKowxgcunwiA_django-templates-and-static-files.png.jpg',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '1',
      },
      {
        pid: '1vasradrfsd',
        title: 'aaa',
        cover: 'https://scotch.io/wp-content/uploads/2016/12/WpdVgxSwRDqDEaHABrx6_flask-crud-part-two-420x210.jpg',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '2',
      },
      {
        pid: '1vasrvqraeadrfsd',
        title: 'aaa',
        cover: 'https://scotch.io/wp-content/uploads/2016/12/M39cybXZRMOz2dTiGFIk_build-a-realtime-chat-server-with-go.png-420x210.jpg',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '3',
      },
      {
        pid: '1vsvfaasrvqraeadrfsd',
        title: 'aaa',
        cover: 'https://scotch.io/wp-content/uploads/2016/12/P7m66fISSa2xETXPzVAQ_scotch-featured-image-guidelines.png-420x202.jpg',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '4',
      },
      {
        pid: '1vsvfasfasrvqraeadrfsd',
        title: 'aaa',
        cover: 'https://cdn.scotch.io/1/school-start/node/thumbs/build-a-node-website.png',
        desc: 'bbbb',
        link: 'www.ssssss.com',
        date: '2017-1-12',
        tag: '幹',
        index: '5',
      },
    ],
  },
  other: [
    {
      pid: 'asfd',
      title: '幹話連篇',
      url: 'google.com',
      list: [
        {
          pid: '1vad',
          title: 'aaa',
          cover: 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg',
          desc: 'bbbb',
          link: 'www.ssssss.com',
          date: '2017-1-12',
          tag: '幹',
        },
      ],
    },
  ],
};

const wrapper = mount(
  <Home data={testData} />
);

function testStickySlider() {
  const hitNumber =  wrapper.find('.hit-number0');
  const length = testData.hit.list - 1;
  // const itemBoxMoreA =  wrapper.find('.itemBox .more a');
  describe('測試 Sticky Slider', () => {
    it('圖片顯示', () => {
      for(let i in length){
        const hitNumber =  wrapper.find(`.hit-number${i}`);
        expect(hitNumber.props().style.backgroundImage).toBe(`url(${testData.hit.list[i].cover})`);
      }
    });
    // const arrayList = testData.hit.list.map((item, i) => {
    //   if (item.index <= 0){
    //     item.index = length;
    //     return item;
    //   }
    //   item.index = item.index - 1;
    //   return item;
    // });
    //
    // console.log(wrapper.state());
    // wrapper.setState({
    //   data: {
    //     hit: {
    //       list:  arrayList
    //     }
    //   }
    // })

  });
}

function testItemBoxComponent() {
  const itemBoxH3 =  wrapper.find('.itemBox h3');
  const itemBoxMoreA =  wrapper.find('.itemBox .more a');
  describe('測試 itemBox Component', () => {
    it('標題顯示', () => {
      expect(itemBoxH3.text()).toBe(testData.other[0].title + '更多');
    });

    it('更多連結', () => {
      expect(itemBoxMoreA.props().href).toBe(testData.other[0].url);
    });
  });
}

function testItemComponent() {
  const itemContentA = wrapper.find('.item a');
  const itemContentH4 = wrapper.find('.itemContent h4');
  const itemContentP = wrapper.find('.itemContent p');
  const itemPaddingBottom = wrapper.find('.item .paddingBottom.bg');
  const itemDate = wrapper.find('.itemInfo .date');
  const itemTag = wrapper.find('.itemInfo .tag');
  describe('測試 item Component', () => {
    it('連結確認', () => {
      expect(itemContentA.props().href).toBe(testData.other[0].list[0].link);
    });

    it('標題顯示', () => {
      expect(itemContentH4.text()).toBe(testData.other[0].list[0].title);
    });

    it('內文顯示', () => {
      expect(itemContentP.text()).toBe(testData.other[0].list[0].desc);
    });

    it('圖片顯示', () => {
      expect(itemPaddingBottom.props().style.backgroundImage).toBe(`url(${coverUrl})`);
    });

    it('日期顯示', () => {
      expect(itemDate.text()).toBe(testData.other[0].list[0].date);
    });

    it('標籤顯示', () => {
      expect(itemTag.text()).toBe(testData.other[0].list[0].tag);
    });
  });
}

describe('頁面—首頁測試', () => {
  testStickySlider();
  testItemBoxComponent();
  testItemComponent();
});
