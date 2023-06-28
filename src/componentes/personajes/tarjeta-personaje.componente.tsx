import IPersonajes from '../../interfaces/personajes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { agregarFav, eliminarFav } from '../../store/favSlice';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface TarjetaPersonajeProps {
    personaje: IPersonajes
}

const TarjetaPersonaje: React.FC<TarjetaPersonajeProps> = ({ personaje }) => {

    const dispatch = useAppDispatch()
    const favoritos = useAppSelector(state => state.fav.favPersonajes)

    const esFavorito = favoritos.some(fav => fav.id === personaje.id)

    const onToggleFavorito = () => {

        if(esFavorito){
            dispatch(eliminarFav(personaje.id))
        } else {
            dispatch(agregarFav(personaje))
        }
        
    }

    return (
        <div className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} />
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito esFavorito={esFavorito} onClick={ onToggleFavorito } />
            </div>
        </div>
    )
}

export default TarjetaPersonaje;