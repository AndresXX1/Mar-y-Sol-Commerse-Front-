import { combineReducers } from 'redux';
import userReducer from '../reducer/reducer'; // Asegúrate de que la ruta sea correcta
import productsSlice from '../reducer/products';
import authSlice from "../reducer/auth"
import updateUsersSlice from "../reducer/updateUser"
import collectionsSlice from "../reducer/collection"
import bookingsSlice from "../reducer/bookings"

const rootReducer = combineReducers({
  user: userReducer, // Asegúrate de que el nombre coincida con cómo lo usas en tu aplicación
  products: productsSlice,
  auth: authSlice, 
  updateUser: updateUsersSlice,
  collection: collectionsSlice,
  bookings:bookingsSlice

});

export default rootReducer;