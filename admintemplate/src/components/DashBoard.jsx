import React from 'react';
import { MDBRow } from 'mdbreact';
import DailyTransaction from './sections/DailyTransaction';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import ModalSection from './sections/ModalSection';

const DashboardPage =  () => {
  return (
    <div>
      <DailyTransaction />
      <ChartSection1 />
      <TableSection />
    </div>
  )
}

export default DashboardPage;