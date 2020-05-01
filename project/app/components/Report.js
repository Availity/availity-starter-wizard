import React from 'react';
import { Alert, Row, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import 'chart.js';
import SummaryForm from './SummaryForm';
import ProviderChart from './ProviderChart';
import SummaryTable from './SummaryTable';

export default () => (
  <>
    <Alert color="primary">You have potentially earned $XX,XXX.XX out of a maximum of $XX,XXX.XX</Alert>
    <Card>
      <CardHeader>
        <CardTitle className="text-center" tag="h4">
          Care Gap Summary
        </CardTitle>
      </CardHeader>
      <CardBody>
        <SummaryForm />
        <Row>
          <ProviderChart />
          <SummaryTable />
        </Row>
      </CardBody>
    </Card>
  </>
);
