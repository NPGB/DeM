import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Artile from './/components/Article';
function Hello(props) {
  let list = [['item1', 'child1', 'item2'], ['item1', 'child1', 'item2']];
  let html_list = list.map((item) =>
    <li>
      <ul>
      { item.map((child) => <li>{ child }</li>) }
      </ul>
    </li>
   );
  return <ul>{ html_list }</ul>;
}
ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Artile />
  </React.StrictMode>,
  document.getElementById('list-articles')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
