import React from 'react';
import { Col, Card, CardTitle } from 'reactstrap';
import { BarChart } from 'react-chartkick';

export default () => (
  <Col xs={12} lg={4}>
    <Card body>
      <CardTitle className="text-center" tag="h4">
        Gaps by Provider
      </CardTitle>
      <BarChart
        data={[
          ['Byrd, Katrina (123456789)', 1022],
          ['Dominguez, Christina (123456789)', 191],
          ['Hernandez, David (123456789', 280],
          ['Henderson, Monica (123456789)', 500],
        ]}
      />
    </Card>
  </Col>
);
