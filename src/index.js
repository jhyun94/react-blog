import React from 'react';
import ReactDOM from 'react-dom';


// const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

  </Provider>
  , document.querySelector('.container'));
