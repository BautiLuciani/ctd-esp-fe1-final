import './paginacion.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { nextPage, prevPage } from '../../store/personajesSlice';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const dispatch = useAppDispatch()
    const pageNum = useAppSelector(state => state.characters.pageNum)
    const cantPages = useAppSelector(state => state.characters.pagination.pages)

    const onAnterior = ()=>{
        dispatch(prevPage())
    }

    const onSiguiente = ()=>{
        dispatch(nextPage())
    }

    return <div className="paginacion">
        <button disabled={(pageNum === 1) ? true : false} className={"primary"} onClick={onAnterior}>Anterior</button>
        <button disabled={(pageNum === cantPages) ? true : false} className={"primary"} onClick={onSiguiente}>Siguiente</button>
    </div>
}

export default Paginacion;