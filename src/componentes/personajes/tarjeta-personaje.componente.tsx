import IPersonajes from '../../interfaces/personajes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { agregarFav, eliminarFav } from '../../store/favSlice';
import { Link } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @author Bautista Luciani
 * @param {IPersonajes} personaje Personaje de Rock y Morty
 * @returns un JSX element 
 */

interface TarjetaPersonajeProps {
    personaje: IPersonajes
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ personaje }) => {

    const dispatch = useAppDispatch()
    const favoritos = useAppSelector(state => state.fav.favPersonajes)

    const esFavorito = favoritos.some(fav => fav.id === personaje.id)

    /**
    * Funcion que agrega o elimina personajes al arreglo de favoritos
    * No requiere ningun parametro ni retorna nada
    * @author Bautista Luciani
    */
    const onToggleFavorito = () => {

        if (esFavorito) {
            dispatch(eliminarFav(personaje.id))
        } else {
            dispatch(agregarFav(personaje))
        }

    }

    return (
        <div className="tarjeta-personaje">
            <Link to={`/detalle/${personaje.id}`}>
                <img src={personaje.image} alt={personaje.name} />
            </Link>
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito esFavorito={esFavorito} onClick={onToggleFavorito} />
            </div>
        </div>
    )
}

export default TarjetaPersonaje;