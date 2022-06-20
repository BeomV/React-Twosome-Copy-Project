import React from 'react';
import './Section02.css';

function Section02() {
  return (
    <div className="Section02">
      <h1 className='main-title'>MENU STORY</h1>
      <div className='rect'></div>

      <div className='subtitle'>
        <ul>
          <h1 className='subsub'>전문가의 섬세함으로 완성한 최상의 커피</h1>
          <li><a href='#' className='COFFEE'>COFEE STORY</a></li>
          <li><a href='#' className='grayfont'>DESSERT STORY</a></li>
          <li><a href='#' className='grayfont'>DELI STORY</a></li>
        </ul>
      </div>
      <div className='mainimg'>
      <img src='/img/menu_coffee1.jpg'></img>
      </div>

      <div className='subimg'>
      <img src='/img/menu_coffee2.jpg'></img>
      <img src='/img/menu_coffee3.jpg'></img>
      </div>

      <div className='blackrect'>
        <p>스페니쉬 연유라떼</p>
      </div>
    </div>
  );
}

export default Section02;
