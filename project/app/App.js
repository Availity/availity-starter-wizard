import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Alert, Card } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/reactstrap-validation-select/resources';
import 'chart.js';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import get from 'lodash.get';
import SummaryForm from './Components/SummaryForm';
import ProviderChart from './Components/ProviderChart';
import SummaryTable from './Components/SummaryTable';

const App = ({ location }) => {
  const [customerId, setCustomerId] = useState(null);
  const [providerId, setProviderId] = useState(null);
  const spaceId = get(qs.parse(location.search), 'spaceId');

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container data-testid="app-container" fluid>
        <PageHeader
          appName="Provider Scorecard"
          spaceId={spaceId}
          feedback
          feedbackProps={{
            modal: true,
          }}
        />
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
                onChange={({ id }) => setProviderId(id)}
                customerId={customerId}
                name="provider"
                type="text"
                placeholder="Choose Group"
              />
            </Col>
          </Row>
        </AvForm>
        {providerId && (
          <>
            <Card body>
              <Alert color="primary">You have potentially earned $XX,XXX.XX out of a maximum of</Alert>
            </Card>

            <SummaryForm />

            <Row>
              <ProviderChart />

              <SummaryTable />
            </Row>
          </>
        )}
      </Container>
    </Spaces>
  );
};

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(App);
