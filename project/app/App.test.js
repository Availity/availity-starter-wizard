/* eslint-disable no-undef */

import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axiosMock from 'axios';
import slotmachineResponse from '../data/slotmachine.json';
import App from './App';

jest.mock('axios');

delete global.window.location
global.window.location = { href: 'http://localhost/?spaceId=48C607A70B5A46A3864A34E2BDDDEA04' }

const renderSso = async () => {

  axiosMock.mockResolvedValue({
    config: { polling: false },
    data: slotmachineResponse,
    status: 202,
    statusText: 'Ok',
  });

  const { getByTestId, ...rest } = render(<App />);

  return { getByTestId, ...rest };
};

afterEach(() => {
  cleanup();
});

describe('ID Card Viewer', () => {
  test('renders', async () => {
    const { getByText } = await renderSso();

    await waitForElement(() => getByText('My Health Plan'));
  });

});