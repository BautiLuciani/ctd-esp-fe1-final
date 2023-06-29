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

    /**
     * Funcion que setea en el inputValue lo que el usuario escribe en el input
     * Ademas setea en el filter el valor del inputValue
     * No retorna nada
     * @author Bautista Luciani
     * @param {Event} e Almacena el valor de lo que esta escrito en el input
     */
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