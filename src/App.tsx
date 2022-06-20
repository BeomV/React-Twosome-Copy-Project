import React from 'react';
import './App.css';
import EDHEADER from './HEADER/EDHEADER';
import Section01 from './Section01/Section01';
import Section02 from './Section02/Section02';
import Section03 from './Section03/Section03';
import Section04 from './Section04/Section04';
import Section05 from './Section05/Section05';
import Section06 from './Section06/Section06';
import FOOTER from './FOOTER/footer';

function App() {
  return (
    <div className="App">
     
     <EDHEADER/>

     <Section01/>
     <Section02/>
     <Section03/>
     <Section04/>
     <Section05/>
     <Section06/>
     <FOOTER/>
    </div>
  );
}

export default App;
