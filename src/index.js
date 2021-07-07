import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { getSnapshot } from "mobx-state-tree"

import { Group } from "./models/Group"

let initialState = { users: {} }

let group = (window.group = Group.create(initialState))

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App group={group}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp()

if (module.hot) {
  module.hot.accept(["./components/App"], () => {
    renderApp()
  })

  module.hot.accept(["./models/Group"], () => {
    const snapshot = getSnapshot(group)
    group = window.group = Group.create(snapshot)
    renderApp()
  })
}