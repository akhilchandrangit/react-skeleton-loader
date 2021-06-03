import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SkeletonLoader from './SkeletonLoader';

const stories = storiesOf('SkeletonLoader', module);

stories.addDecorator(withKnobs);

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

stories.add('color', () => (
  <>
    <SkeletonLoader width={400} height={30} color="#F5A492" />
    <SkeletonLoader width={400} height={30} count={3} color="#F5A492" />
  </>
));

stories.add('hide animation', () => (
  <SkeletonLoader width={100} height={100} shape="circle" hideAnimation />
));

stories.add('hide gradient', () => (
  <SkeletonLoader
    width={100}
    height={100}
    shape="circle"
    color="#F5A492"
    hideGradient
  />
));