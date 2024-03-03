import React, { useState, useRef } from 'react';
import chevron from '../../assets/chevron.svg';
import './style.scss';

function Collapse({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [rotateClass, setRotateClass] = useState('collapse-icon');

  const contentCollapse = useRef(null);

  const toggleCollapse = () => {
    setIsActive(!isActive);
    setContentHeight(isActive ? 0 : contentCollapse.current.scrollHeight);
    setRotateClass(isActive ? 'collapse-icon' : 'collapse-icon rotate');
  };

  const contentArray = Array.isArray(content) ? content.slice(0, 9) : [content];

  return (
    <div className="collapse-section">
      <button className={`collapse ${isActive ? 'active' : ''}`} onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <img src={chevron} className={rotateClass} alt="" />
      </button>
      <div ref={contentCollapse} style={{ maxHeight: `${contentHeight}px` }} className="collapse-content">
        <div className="collapse-text">
          {contentArray.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
