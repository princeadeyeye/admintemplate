import React from 'react';
import DailyTransaction from './sections/DailyTransaction';
import TableSection from './sections/TableSection';
import ChartSection from './sections/ChartSection';

const DashboardPage =  () => {
  return (
    <div className='col-xl-8'>
      <div className='row'>
        <div className='col-xl-12'>
          <DailyTransaction />
         </div>
       </div>
       <div className='row'>
         <div className='col-xl-12'>
          <ChartSection />
         </div>
        </div>
        <div className='row'>
           <div className='col-xl-12'>
            <TableSection />
           </div>
        </div>
    </div>
  )
}

export default DashboardPage;