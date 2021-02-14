import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import inject from './injectOpenCV';
import { OpenCvConsumer } from 'opencv-react';
const OPENCV_URL = 'https://docs.opencv.org/3.4.0/opencv.js';

const promise = inject('opencv',OPENCV_URL);

promise.then(() => {
      console.log(`success to load ${OPENCV_URL}`);
      // eslint-disable-next-line no-undef
      const opencv = cv;
      ReactDOM.render(
        <React.StrictMode>
          <App module={opencv}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log(`Failed to load ${OPENCV_URL}`);
    });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
