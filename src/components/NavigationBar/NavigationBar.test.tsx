import React from 'react'
import { render } from '@testing-library/react'
import NavigationBar from './NavigationBar'

describe('NavigationBar', () => {
  it('renders without crashing', () => {
    const wrapper = render(<NavigationBar />)

    expect(wrapper).toBeTruthy()
  })
})
