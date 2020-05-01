import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, Field } from '@availity/form';
import { SelectField } from '@availity/select';

export default () => (
  <Form
    initialValues={{
      gapSelect: '',
      providerSelect: '',
      metricSelect: '',
    }}
  >
    <Row>
      <Col xs={12} sm={6} md={4}>
        <SelectField
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
        <Field name="Gap Description" label="Gap Description" />
      </Col>

      <Col xs={12} sm={6} md={3}>
        <SelectField
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
        <SelectField
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
  </Form>
);
