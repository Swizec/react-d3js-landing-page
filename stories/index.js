import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Hero from '../src/widgets/Hero'
import CopyLight from '../src/widgets/CopyLight'

storiesOf('button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ))

storiesOf('Hero', module).add('widget', () => <Hero />)

storiesOf('CopyLight', module).add('widget', () => <CopyLight />)
