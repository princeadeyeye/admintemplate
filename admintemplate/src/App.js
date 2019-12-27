import React from 'react';
import './App.css';
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import DashBoard from './components/DashBoard'


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
        <div className='col-xl-8'>
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
