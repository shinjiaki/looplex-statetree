import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { getSnapshot } from "mobx-state-tree"

import { WishList } from "./models/WishList"

let initialState = {
  items: [
    {
      name: "Machine Gun Preacher",
      price: 7.35,
      image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f4086baf7ba1ee2117a70d40b6debb4f5f5cc65ab7c5e84323855b62b43bb4ed._RI_V_TTW_.jpg"
    },
    {
      name: "LEGO Mindstorm EV3",
      price: 349.95,
      image: "https://www.lego.com/cdn/cs/set/assets/blt7fc03b671602b2fa/31313_alt1.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
    }
  ]
}

let wishList = WishList.create(initialState)

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App wishList={wishList}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp()

if (module.hot) {
  module.hot.accept(["./components/App"], () => {
    renderApp()
  })

  module.hot.accept(["./models/WishList"], () => {
    const snapshot = getSnapshot(wishList)
    wishList = WishList.create(snapshot)
    renderApp()
  })
}