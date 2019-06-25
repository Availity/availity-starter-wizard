import React from 'react';
import { Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';

const SummaryForm = () => {
  return (
    <div>
      <Col sm="9" md={{ size: 6, offset: 5 }}>
        <br />
        <h3> Care Gap Summary </h3>
      </Col>

      <AvForm>
        <Row>
          <Col xs={1}>
            <AvSelectField
              name="select"
              label="Gap Type"
              options={[
                {
                  name: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>

          <Col xs={3}>
            <AvField name="Gap Description" label="Gap Description">
              {' '}
            </AvField>
          </Col>

          <Col xs={4}>
            <AvSelectField
              name="select"
              label="Provider"
              options={[
                {
                  name: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>

          <Col xs={2}>
            <AvSelectField
              name="select"
              label="Sort By Metric"
              options={[
                {
                  name: 'All',
                  value: 'All',
                },
              ]}
            />
          </Col>

          <Col xs={2}>
            <AvSelectField
              name="select"
              label="Sort Order"
              options={[
                {
                  name: 'All',
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

export default SummaryForm;
