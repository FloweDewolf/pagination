import React, { useState } from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from 'helpers/renderWithProviders'
import userEvent from '@testing-library/user-event'

describe('Tests of the App component', () => {
  test('Checks if entering values works', () => {
    renderWithProviders(<App />)
    const input = screen.getByTestId('input-element')
    fireEvent.change(input, { target: { value: '1' } })
    expect(input).toHaveDisplayValue('1')
  })

  test('Checks if the sorting works', () => {
    renderWithProviders(<App />)
    const input = screen.getByTestId('input-element')
    fireEvent.change(input, { target: { value: 2 } })
    const correctParagraph = screen.getByDisplayValue(2)
    const wrongParagraph = screen.queryByDisplayValue(5)

    expect(correctParagraph).toHaveDisplayValue('2')
    expect(wrongParagraph).toBeNull()
  })

  test('Checks if the switching between pages works', async () => {
    renderWithProviders(<App />)
    const button = screen.getByText('→')
    fireEvent.click(button)
    await waitFor(() => screen.getByText('blue turquoise'))
    await waitFor(() => expect(screen.queryByText('cerulean')).toBeNull())
  })

  test('Checks if the button is blocked when filtered products are displayed', async () => {
    renderWithProviders(<App />)
    const input = screen.getByTestId('input-element')
    const leftButton = screen.getByText('⟵')
    const rightButton = screen.getByText('→')
    fireEvent.click(leftButton)
    fireEvent.change(input, { target: { value: 1 } })
    fireEvent.click(rightButton)
    fireEvent.change(input, { target: { value: '' } })
    await waitFor(() => expect(screen.queryByText('blue turquoise')).toBeNull())
  })
})
