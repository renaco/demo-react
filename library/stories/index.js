import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { WithFigma } from 'storybook-addon-figma'

storiesOf('Button', module)
  // .add('with text', () => (
  //   <Button>Hello Button</Button>
  // ))
  // .add('with some emoji', () => (
  //   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  // ))
  .add('With Figma', () => (
    <WithFigma
      url={'https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary'}
    >
      <Button>Hello Button</Button>
    </WithFigma>
  ))