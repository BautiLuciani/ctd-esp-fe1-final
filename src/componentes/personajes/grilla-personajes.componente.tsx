import IPersonajes from '../../interfaces/personajes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPersonajes } from '../../store/personajesSlice';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useEffect } from 'react';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useAppDispatch()
    const personajes = useAppSelector(state => state.characters.characters)
    const loading = useAppSelector(state => state.characters.loading)
    const error = useAppSelector(state => state.characters.error)
    const pageNum = useAppSelector(state => state.characters.pageNum)
    const filter = useAppSelector(state => state.characters.filter)
    const favPersonajes = useAppSelector(state => state.fav.favPersonajes)

    const url = window.location.pathname

    useEffect(() => {
        if (filter) {
            dispatch(getPersonajes({ page: pageNum, name: filter }))
        } else {
            dispatch(getPersonajes({ page: pageNum }))
        }
    }, [dispatch, filter, pageNum])

    if (loading) {
        <div>Cargando...</div>
    }

    if (error) {
        <div>Error: {error}</div>
    }

    return (
        <div className="grilla-personajes">
            {
                (url === '/favoritos')
                    ? (
                        (favPersonajes.length === 0)
                            ? (
                                <div><h1>No hay favoritos aun</h1></div>
                            )
                            : (
                                favPersonajes.map((personaje: IPersonajes) => (
                                    <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                                ))
                            )
                    )
                    : (
                        personajes.map((personaje: IPersonajes) => (
                            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                        ))
                    )
            }
        </div>
    )
}

export default GrillaPersonajes;