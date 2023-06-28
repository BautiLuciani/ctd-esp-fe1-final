import { combineReducers, configureStore} from "@reduxjs/toolkit";
import favReducer from "./favSlice";
import personajesReducer from "./personajesSlice";

const rootReducer = combineReducers({
   fav: favReducer,
   characters: personajesReducer
})

const store = configureStore({
   reducer: rootReducer
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;