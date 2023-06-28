import { useEffect, useState } from 'react';
import './filtros.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFilter, setPage } from '../../store/personajesSlice';

const Filtros: React.FC = () => {

    const dispatch = useAppDispatch()
    const sinFiltro = useAppSelector(state => state.characters.limpiarFiltro)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
      if(sinFiltro===true){
        setInputValue("")
        dispatch(setPage())
      }
    }, [dispatch, sinFiltro])

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(e.target.value)
        dispatch(setFilter(inputValue))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            name="nombre"
            value={inputValue}
            onChange={handleInputValue}
        />
    </div>
}

export default Filtros;