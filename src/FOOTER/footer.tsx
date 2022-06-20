import React from 'react';
import './footer.css';

function footer() {
  return (
    <div className="footer">
            <div className='area1'>
                    <div className='left'>
                        <ul>
                            <li><a>기업 및 단체구매안내</a></li>
                            <li><a>가맹상담신청</a></li>
                            <li><a>사이버신문고</a></li>
                        </ul>
                    </div>

                    <div className='right'>
                        <ul>
                            <li>
                               <strong>Address</strong>
                               <p>서울특별시 중구 을지로 170, 8층(을지로4가,을지트윈타워)투썸플레이스(주)</p>
                            </li>

                            <li>
                               <strong>Customer Center</strong>
                               <p>고객센터 : 1577-4410 팩스 : 02-2058-6777</p>
                            </li>
                        </ul>
                    </div>
      </div>

      <div className='foot'>
            <ul>
                <li><a href='#'>이용 약관</a></li>

                <li><a href='#'>개인정보처리방침</a></li>

                <li><a href='#'>위치기반서비스 이용약관</a></li>
                <li><a href='#'>이메일 무단수집거부</a></li>
                <li><a href='#'>법적고지</a></li>
                <li><a href='#'>사업자정보확인</a></li>
            </ul>    
      </div>
      <div className='foot2'>
            <ul>
                <li>대표이사 : 이영상  개인정보보호책임자 : 장재호  사업자등록번호 : 404-86-01054</li>
                <li>통신판매업종신고증 : 제 2018-서울중구-0353호  대표이메일 : helpmaster@twosome.co.kr</li>
                <li>Copyright ⓒ 2021 A TWOSOME PLACE Co., LTD. All Rights Reserved.</li>
            </ul>

      </div>



    </div>
  );
}

export default footer;
