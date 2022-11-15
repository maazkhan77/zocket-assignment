import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { campaignListReducer } from './reducers/campaignReducers';

const reducer = combineReducers({
    campaignList: campaignListReducer,
});

const middlewares = [thunk];

const store = createStore(
    reducer,composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;