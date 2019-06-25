import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { Container, Row, Col, Alert, Card, Table } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { AvSelectField } from '@availity/reactstrap-validation-select';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/reactstrap-validation-select/resources';
import { BarChart } from 'react-chartkick';
import 'chart.js';
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

        <Col sm="9" md={{ size: 6, offset: 5 }}>
          <br />
          <h3> Care Gap Summary </h3>
        </Col>

        <AvForm>
          <Row>
            <Col xs={1}>
              <AvField type="select" name="select" label="Gap Type">
                <option>All</option>
              </AvField>
            </Col>

            <Col xs={3}>
              <AvField name="Gap Description" label="Gap Description">
                {' '}
              </AvField>
            </Col>

            <Col xs={4}>
              <AvField type="select" name="select" label="Provider">
                <option>All</option>
              </AvField>
            </Col>

            <Col xs={2}>
              <AvField type="select" name="select" label="Sort By Metric">
                <option>Gaps</option>
              </AvField>
            </Col>

            <Col xs={2}>
              <AvField type="select" name="select" label="Sort Order">
                <option>Ascending</option>
                <option>Descending</option>
              </AvField>
            </Col>
          </Row>
        </AvForm>

        <Row>
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

          <Col xs={8}>
            <Table size="small">
              <thead>
                <tr>
                  <th>Gap Type</th>
                  <th>Gap Description</th>
                  <th>Base Value</th>
                  <th>Potentially Earned</th>
                  <th>Max Earning Potential</th>
                  <th>Eligible Gaps</th>
                  <th># Gaps Open</th>
                  <th># Gaps Closed</th>
                  <th>% Gaps Closed</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-light">
                  <td>CoC</td>
                  <td>Appointment Agenda</td>
                  <td>$75</td>
                  <td>$1,050.00</td>
                  <td>$99,000</td>
                  <td>600</td>
                  <td>646</td>
                  <td>14</td>
                  <td>2%</td>
                </tr>

                <tr>
                  <td>STAR</td>
                  <td>Colorectal Cancer Screen</td>
                  <td>$30</td>
                  <td>$5,850</td>
                  <td>$26,220</td>
                  <td>437</td>
                  <td>242</td>
                  <td>105</td>
                  <td>45%</td>
                </tr>

                <tr>
                  <td> </td>
                  <td>Diabetes - Dialated Eye Exam</td>
                  <td>$30</td>
                  <td>$1,890</td>
                  <td>$15,480</td>
                  <td>258</td>
                  <td>198</td>
                  <td>60</td>
                  <td>23%</td>
                </tr>

                <tr className="bg-light">
                  <td>OTHER</td>
                  <td>Adult BMI Percentile/Value</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>258</td>
                  <td>198</td>
                  <td>60</td>
                  <td>23%</td>
                </tr>

                <tr className="bg-light">
                  <td />
                  <td>Diabetes Monitor Nephropathy</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>258</td>
                  <td>87</td>
                  <td>171</td>
                  <td>66%</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Spaces>
  );
};

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(App);
