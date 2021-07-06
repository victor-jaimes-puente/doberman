import React from 'react';
import '../App.css';
import ElPadre from './ElPadre';
import EnVenta from './EnVenta';
import LaMadre from './LaMadre';
import Puppy1 from './Puppy1';
import Puppy2 from './Puppy2';
import Puppy3 from './Puppy3';

function Home() {
  return (
     <React.Fragment>
       <div style={{textAlign: 'center',}} >
       <LaMadre />
       <ElPadre />
       <EnVenta />
       <Puppy1 />
       {/* <Puppy2 /> */}
       <Puppy3 />
       </div>
     </React.Fragment>
  );
}

export default Home;