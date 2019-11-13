import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { WithFigma } from 'storybook-addon-figma'

storiesOf('CheckBox', module)
  .add('default', () => (
    <CheckBox>Hello CheckBox</CheckBox>
  ))