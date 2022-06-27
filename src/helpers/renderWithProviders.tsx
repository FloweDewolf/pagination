import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { BrowserRouter } from 'react-router-dom'

export const renderWithProviders = (children: any) => {
  return render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  )
}
