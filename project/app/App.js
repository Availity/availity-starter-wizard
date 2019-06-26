import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/reactstrap-validation-select/resources';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import Report from './components/Report';

const getQueryString = pathname => pathname.substring(pathname.lastIndexOf('?'), pathname.length);

export default () => {
  const [customerId, setCustomerId] = useState(null);
  const [providerId, setProviderId] = useState(null);
  const { spaceId } = qs.parse(getQueryString(window.location.href));

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
                  <>
                    <span className="text-primary">Step 1 -</span> Choose Product
                  </>
                }
                options={[{ label: 'Medicare', value: 'medicare' }]}
                name="product"
                placeholder="Choose Product"
              />
            </Col>

            <Col xs={4}>
              <AvOrganizationSelect
                label={
                  <>
                    <span className="text-primary">Step 2 -</span> Choose Organization
                  </>
                }
                onChange={({ customerId }) => setCustomerId(customerId)}
                name="organization"
                placeholder="Choose Organization"
              />
            </Col>

            <Col xs={4}>
              <AvProviderSelect
                label={
                  <>
                    <span className="text-primary">Step 3 -</span> Choose Group
                  </>
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
          <Report />
        )}
      </Container>
    </Spaces>
  );
};
