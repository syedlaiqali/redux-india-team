import {createStore,combineReducers} from 'redux';
import {Reducerfile} from '../reducer/Reducer';

export const TeamStore =()=>{
      const store = createStore(combineReducers({Reducerfile}),
      
      window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__())
      return store;


}