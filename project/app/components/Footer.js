import React from 'react';
import Icon from '@availity/icon';
import AvLink from '@availity/link';

export default () => (
  <p className="text-center mt-3">
    Made with <Icon title="Click to See Animated Card" name="heart" color="danger" /> by{' '}
    <AvLink url="https://www.availity.com" target="_blank">
      Availity
    </AvLink>{' '}
    2019
  </p>
);
