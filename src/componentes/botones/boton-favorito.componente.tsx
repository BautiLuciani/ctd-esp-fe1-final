import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * @author Bautista Luciani
 * @param {boolean} esFavorito Almacena el valor booleano para saber si un personaje es favorito o no
 * @param {void} onClick Almacena la funcion para que se ejecute al hacer click en la estrella
 * @returns un JSX element 
 */

interface BotonFavoritoProps {
    esFavorito: boolean,
    onClick?: ()=> void
}

const BotonFavorito: React.FC<BotonFavoritoProps> = ({ esFavorito, onClick }) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return (
        <div className="boton-favorito" onClick={ onClick }>
            <img src={src} alt={"favorito"}/>
        </div>
    )
}

export default BotonFavorito;