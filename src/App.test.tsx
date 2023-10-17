import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

test('render application header', () => {
  render(<Provider store={store}><App /></Provider>);
  const header = screen.getByText(/file browser/i);
  expect(header).toBeInTheDocument();
});
