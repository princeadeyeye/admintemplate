import React from 'react';
import DailyTransaction from './sections/DailyTransaction';
import TableSection from './sections/TableSection';
import ChartSection from './sections/ChartSection';

const DashboardPage =  () => {
  return (
    <div>
      <DailyTransaction />
      <ChartSection />
      <TableSection />
    </div>
  )
}

export default DashboardPage;