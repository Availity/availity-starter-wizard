import React from 'react';
import { Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';

export default () => {
  return (
    <div>
      <div className="text-center mt-3">
        <h3> Care Gap Summary </h3>
      </div>

      <AvForm>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <AvSelectField
              name="gapSelect"
              label="Gap Type"
              options={[
                {
                  label: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>

          <Col xs={12} sm={6} md={3}>
            <AvField name="Gap Description" label="Gap Description" />
          </Col>

          <Col xs={12} sm={6} md={3}>
            <AvSelectField
              name="providerSelect"
              label="Provider"
              options={[
                {
                  label: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>

          <Col xs={12} sm={6} md={2}>
            <AvSelectField
              name="metricSelect"
              label="Sort By Metric"
              options={[
                {
                  label: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>
        </Row>
      </AvForm>
    </div>
  );
};
