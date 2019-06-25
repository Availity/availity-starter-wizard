import React from 'react';
import { Col, Table } from 'reactstrap';

const SummaryTable = () => {
  return (
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
  );
};

export default SummaryTable;
