import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux-dynamic-modules';
// import { persistStore } from 'redux-persist';

const store = createStore({
  enhancers: [compose(applyMiddleware(thunk))],
});

export default store;
