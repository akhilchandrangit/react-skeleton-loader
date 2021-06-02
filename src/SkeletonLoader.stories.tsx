import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import SkeletonLoader from './SkeletonLoader';

const stories = storiesOf('SkeletonLoader', module);

stories.addDecorator(withKnobs);
stories.addParameters({
  readme: {
    content: README,
  },
});

stories.add('default', () => <SkeletonLoader width={100} height={100} />);

stories.add('with count', () => (
  <SkeletonLoader width={150} height={30} count={4} />
));

stories.add('with custom style', () => (
  <SkeletonLoader
    width={150}
    height={30}
    count={4}
    style={{
      marginRight: '20px',
      borderRadius: '6px',
    }}
  />
));

stories.add('circle', () => (
  <SkeletonLoader width={100} height={100} shape="circle" />
));
