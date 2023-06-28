import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPersonajes from "../interfaces/personajes";

interface IState {
    data: IPersonajes[]
}

const initialState: IState = {data: []}

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        agregarFav: (state, action: PayloadAction<IPersonajes>)=>{
            state.data.push(action.payload)
        },
        eliminarFav: (state, action: PayloadAction<IPersonajes>)=>{
            state.data.filter(personaje => personaje.id !== action.payload.id)
        }
    }
})

export const { agregarFav, eliminarFav } = favSlice.actions

export default favSlice.reducer
