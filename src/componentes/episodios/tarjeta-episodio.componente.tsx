import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';
import axios from 'axios';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */

interface tarjetaEpisodio {
    episode: string
}

interface IEpisodio {
    name: string,
    air_date: string,
    episode: string
}

const TarjetaEpisodio: React.FC<tarjetaEpisodio> = ({episode}) => {

    const [episodio, setEpisodio] = useState<IEpisodio>()

    useEffect(() => {
        const getPersonaje = async () => {
            try {
                const res = await axios.get(episode)
                const datosEpisodio = res.data
                setEpisodio(datosEpisodio)
            } catch (error) {
                console.log('Error al obtener los detalles del personaje: ', error)
            }
        }

        getPersonaje()
    }, [episode])    

    if (!episodio) {
        return <div>Cargando...</div>;
    }

    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {episodio.episode}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;