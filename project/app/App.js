import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { Container, Row, Col, Alert, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/reactstrap-validation-select/resources';

import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import get from 'lodash.get';
// import { Search, Results } from './areas';

const App = ({ location }) => {
  const [customerId, setCustomerId] = useState(null);
  const spaceId = get(qs.parse(location.search), 'spaceId');

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container data-testid="app-container" fluid>
        <PageHeader appName="Provider Scorecard" spaceId={spaceId} feedback />
        <AvForm>
          <Row>
            <Col xs={4}>
              <AvSelectField
                label={
                  <label>
                    <span className="text-primary">Step 1 -</span> Choose Product
                  </label>
                }
                options={[{ label: 'Medicare', value: 'medicare' }]}
                name="product"
                placeholder="Choose Product"
              />
            </Col>

            <Col xs={4}>
              <AvOrganizationSelect
                label={
                  <label>
                    <span className="text-primary">Step 2 -</span> Choose Organization
                  </label>
                }
                onChange={({ customerId }) => setCustomerId(customerId)}
                name="organization"
                placeholder="Choose Organization"
              />
            </Col>

            <Col xs={4}>
              <AvProviderSelect
                label={
                  <label>
                    <span className="text-primary">Step 3 -</span> Choose Group
                  </label>
                }
                customerId={customerId}
                name="provider"
                type="text"
                placeholder="Choose Group"
              />
            </Col>
          </Row>
          <Card body>
            <Alert color="primary">You have potentially earned $XX,XXX.XX out of a maximum of</Alert>
          </Card>
        </AvForm>
      </Container>
    </Spaces>
  );
};

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(App);
