/* This is a test written in JavaScript using the Jest testing framework and the
`@testing-library/react` library. It tests whether the `App` component renders a link with the text
"learn react". */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
