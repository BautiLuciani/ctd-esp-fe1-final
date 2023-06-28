import { useState } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../store/hooks';
import { setFilter } from '../../store/personajesSlice';

const Filtros: React.FC = () => {

    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState("")

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