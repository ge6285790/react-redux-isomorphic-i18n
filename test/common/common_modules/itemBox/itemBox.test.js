import React from 'react';
import { mount } from 'enzyme';
import ItemBox from '../../../../common/components/common_modules/itemBox/ItemBox';

const coverUrl = 'https://scotch.io/wp-content/uploads/2016/12/6BzHozJUSZW8Rcn4jYIW_transform-images-on-upload-or-on-demand-cloudinary.png-420x210.jpg';
const testData = {
  pid: 'asfd',
  title: '幹話連篇',
  url: 'google.com',
  list: [
    {
      pid: '1vad',
      title: 'aaa',
      cover: coverUrl,
      desc: 'bbbb',
      date: '2017-1-12',
      tag: '幹',
    },
  ],
};

const wrapper = mount(
  <ItemBox data={testData}/>
);

function testItemBoxComponent() {
  const itemBoxH3 =  wrapper.find('.itemBox h3');
  const itemBoxMoreA =  wrapper.find('.itemBox .more a');
  describe('測試 itemBox Component', () => {
    it('標題顯示', () => {
      expect(itemBoxH3.text()).toBe(testData.title + '更多');
    });

    it('更多連結', () => {
      expect(itemBoxMoreA.props().href).toBe(testData.url);
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
      expect(itemContentA.props().href).toBe(testData.list[0].link);
    });

    it('標題顯示', () => {
      expect(itemContentH4.text()).toBe(testData.list[0].title);
    });

    it('內文顯示', () => {
      expect(itemContentP.text()).toBe(testData.list[0].desc);
    });

    it('圖片顯示', () => {
      expect(itemPaddingBottom.props().style.backgroundImage).toBe(`url(${coverUrl})`);
    });

    it('日期顯示', () => {
      expect(itemDate.text()).toBe(testData.list[0].date);
    });

    it('標籤顯示', () => {
      expect(itemTag.text()).toBe(testData.list[0].tag);
    });
  });
}

describe('模組—itemBox測試', () => {
  testItemBoxComponent();
  testItemComponent();
});
