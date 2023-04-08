import React from 'react';
import SideBar from './SideBar';
//import ContentWrapper from './ContentWrapper';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
               {/*<!-- antes estaba aca <Contentwrapper>  pero lo saque porque sino aparace 2 veces -->*/}                   
        </div>
    </React.Fragment>
  );
}

export default App;
