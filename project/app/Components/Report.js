import React from 'react';
import { Alert, Row } from 'reactstrap';
import 'chart.js'
import SummaryForm from './SummaryForm';
import ProviderChart from './ProviderChart';
import SummaryTable from './SummaryTable';

export default () => (
  <>
    <Alert color="primary">You have potentially earned $XX,XXX.XX out of a maximum of $XX,XXX.XX</Alert>
    <SummaryForm />
    <Row>
      <ProviderChart />
      <SummaryTable />
    </Row>
  </>
);
