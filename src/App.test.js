import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "./redux/store/index";

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/react/i);
  expect(linkElement).toBeInTheDocument();
});
