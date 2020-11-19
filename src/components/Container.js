import React from 'react';

function Container(props) {
  return (
    <div className="Container">
      <div className="sidebar">{props.sidebar}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Container;
