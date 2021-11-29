import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';

import './i18n';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </>,
  document.getElementById('root')
);
