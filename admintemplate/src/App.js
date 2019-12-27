import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'


function App() {
  return (
    <div className="flexible-content">
    <div className='row'>
      <div className='col-xl-12'>
        <TopBar />
      </div>
    </div>

     <div className='row'>
      <div className='col-xl-3'>
        <SideBar />
      </div>
    </div>


           {/*<DashhBoard />*/}
    </div>
  );
}

export default App;
