import React from 'react';
import { Col, Table } from 'reactstrap';

const rows = [
  {
    id: '1',
    type: 'Coc',
    description: 'Appointment Agenda',
    potential: '$1050.00',
    max: '$99,000.00',
    gaps: '600',
    openGaps: '646',
    closedGaps: '14',
  },
  {
    id: '2',
    type: 'STAR',
    description: 'Colorectal Cancer Screen',
    potential: '$5,850.00',
    max: '$26,200.00',
    gaps: '437',
    openGaps: '242',
    closedGaps: '105',
  },
  {
    id: '3',
    type: '',
    description: 'Diabetes - Dialated Eye Exam',
    potential: '$1,890',
    max: '$15,480',
    gaps: '437',
    openGaps: '198',
    closedGaps: '37',
  },
  {
    id: '4',
    type: 'OTHER',
    description: 'Adult BMI Percentile/Value',
    potential: '',
    max: '',
    gaps: '258',
    openGaps: '198',
    closedGaps: '60',
  },
  {
    id: '5',
    type: '',
    description: 'Diabetes Monitor Nephropathy	',
    potential: '',
    max: '',
    gaps: '258',
    openGaps: '87',
    closedGaps: '171',
  },
];

// eslint-disable-next-line react/prop-types
const Row = ({ type, description, potential, max, gaps, openGaps, closedGaps }) => (
  <tr>
    <td>{type}</td>
    <td>{description}</td>
    <td>{potential}</td>
    <td>{max}</td>
    <td>{gaps}</td>
    <td>{openGaps}</td>
    <td>{closedGaps}</td>
  </tr>
);

export default () => (
  <Col xs={12} lg={8}>
    <Table size="small" striped>
      <thead>
        <tr>
          <th>Gap Type</th>
          <th>Gap Description</th>
          <th>Potentially Earned</th>
          <th>Max Earning Potential</th>
          <th>Eligible Gaps</th>
          <th># Gaps Open</th>
          <th># Gaps Closed</th>
        </tr>
      </thead>

      <tbody>
        {rows.map(data => (
          <Row key={data.id} {...data} />
        ))}
      </tbody>
    </Table>
  </Col>
);
