import React from 'react';
import { Col, Card } from 'reactstrap';
import { BarChart } from 'react-chartkick';
import 'chart.js';

const ProviderChart = () => {
  return (
    <Col xs={4}>
      <Card body>
        <h4>Gaps by Provider</h4>
      </Card>

      <BarChart
        data={[
          ['Byrd, Katrina (123456789)', 1022],
          ['Dominguez, Christina (123456789)', 191],
          ['Hernandez, David (123456789', 280],
          ['Henderson, Monica (123456789)', 500],
        ]}
      />
    </Col>
  );
};

export default ProviderChart;
