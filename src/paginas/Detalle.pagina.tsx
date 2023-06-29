import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IPersonajes from "../interfaces/personajes";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { agregarFav, eliminarFav } from "../store/favSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle: React.FC = () => {

    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const favoritos = useAppSelector(state => state.fav.favPersonajes)

    const esFavorito = favoritos.some(fav => fav.id === Number(id))

    const [personaje, setPersonaje] = useState<IPersonajes | null>()

    useEffect(() => {
        const getPersonaje = async () => {
            try {
                const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                const datosPersonaje = res.data
                setPersonaje(datosPersonaje)
            } catch (error) {
                console.log('Error al obtener los detalles del personaje: ', error)
            }
        }

        getPersonaje()
    }, [id])

    if (!personaje) {
        return <div>Cargando...</div>;
    }

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

    return <div className="container">
        <h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.image} alt={personaje.name} />
                <div className={"detalle-header-texto"}>

                    <p>{personaje.name}</p>
                    <p>Planeta: {personaje.origin.name}</p>
                    <p>Genero: {personaje.gender}</p>
                </div>
                <BotonFavorito esFavorito={esFavorito} onClick={onToggleFavorito} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {
                personaje.episode.map(episode => (
                    <TarjetaEpisodio key={episode} episode={episode} />
                ))
            }
        </div>
    </div>
}

export default PaginaDetalle