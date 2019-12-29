import React from 'react';
import DailyTransaction from './sections/DailyTransaction';
import TableSection from './sections/TableSection';
import ChartSection from './sections/ChartSection';

const DashboardPage =  () => {
  return (
    <div>
    <div className='col-xl-12'>
      <DailyTransaction />
     </div>
     <div className='col-xl-12'>
      <ChartSection />
     </div>
     <div className='col-xl-12'>
      <TableSection />
     </div>
    </div>
  )
}

export default DashboardPage;