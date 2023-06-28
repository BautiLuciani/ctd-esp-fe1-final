import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPersonajes from "../interfaces/personajes";
import InfoPersonajes from '../interfaces/infoPersonajes';

interface InitialState {
    pagination: InfoPersonajes
    characters: IPersonajes[]
    loading: boolean
    error: string | null
    pageNum: number
    filter: string
    limpiarFiltro: boolean
}

const initialState: InitialState = {
    pagination: {
        count: 0,
        pages: 0,
        next: "",
        prev: ""
    },
    characters: [],
    loading: false,
    error: null,
    pageNum: 1,
    filter: "",
    limpiarFiltro: false
}

export const getPersonajes = createAsyncThunk("personajes/getPersonajes", async({page,name}: {page: number, name?: string})=>{
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`
    if(name){
        url = url + `&name=${name}`
    }
    const res = await fetch(url)
    const { results, info } = await res.json()
    return {characters: results, pagination: info}
})

const personajesSlice = createSlice({
    name: "personajes",
    initialState,
    reducers: {
        prevPage: (state) => {
            if(state.pageNum > 1){
                state.pageNum -= 1
            }
        },
        nextPage: (state) => {
            if(state.pageNum < 42){
                state.pageNum += 1
            }
        },
        setPage: (state) => {
            state.pageNum = 1
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
            state.limpiarFiltro = false
        },
        cleanFilter: (state) => {
            state.filter = ""
            state.limpiarFiltro = true
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getPersonajes.pending, (state) =>{
                state.loading = true
                state.error = null
            })
            .addCase(getPersonajes.fulfilled, (state, action: PayloadAction<{characters: IPersonajes[], pagination: InfoPersonajes}>)=>{
                state.characters = action.payload.characters
                state.pagination = action.payload.pagination
                state.loading = false
                state.error = null
            })
            .addCase(getPersonajes.rejected, (state) => {
                state.loading = false
                state.error = "Error al obtener los personajes"
            })
    }
})

export const { prevPage, nextPage, setPage, setFilter, cleanFilter } = personajesSlice.actions

export default personajesSlice.reducer