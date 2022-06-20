import React from 'react';
import './Section06.css';

function Section06() {
  return (
    <div className="Section6">
      <div className='NEWS'>
          <p>NEWS</p>
          <p>&NOTICE</p>
          <div className='NEWSrect'></div>
      </div>

      <div className='board'>
        <p>등록된 게시글이 없습니다.</p>
      </div>

      <div className='category'>
          <p className='active'>보도자료</p>
          <p className='none'>공지사항</p>
          <img src='/img/cpature.png'></img>
      </div>
      
    </div>
  );
}

export default Section06;
