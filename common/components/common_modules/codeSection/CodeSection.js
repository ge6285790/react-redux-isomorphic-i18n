import React from 'react';
import isNode from 'detect-node';
if (!isNode) { require('./codeSection.scss'); }

const CodeSection = (props) => {
  const { data: code } = props;
  const arrayList = code.map((items, i) => {
    if (items.length === 0) {
      return <br key={new Date() + i} />;
    }
    return (
      <span
        className={items[1]}
        data-indent={items[2]}
        key={new Date() + i}
      >
        {items[0]}
      </span>
    );
  });

  return (
    <section className="codeSection">
      {arrayList}
    </section>
  );
};

export default CodeSection;
