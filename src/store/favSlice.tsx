import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPersonajes from "../interfaces/personajes";

interface IState {
    favPersonajes: IPersonajes[]
}

const initialState: IState = {
    favPersonajes: []
}

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        agregarFav: (state, action: PayloadAction<IPersonajes>)=>{
            state.favPersonajes.push(action.payload)
        },
        eliminarFav: (state, action: PayloadAction<number>)=>{
            state.favPersonajes = state.favPersonajes.filter(personaje => personaje.id !== action.payload)
        },
        limpiarFav: (state) => {
            state.favPersonajes = []
        }
    }
})

export const { agregarFav, eliminarFav, limpiarFav } = favSlice.actions

export default favSlice.reducer
