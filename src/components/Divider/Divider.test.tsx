import React from 'react'
import { render } from '@testing-library/react'
import Input from './Divider'

describe('Input', () => {
  it('renders without crashing', () => {
    const wrapper = render(<Input />)

    expect(wrapper).toBeTruthy()
  })
})
