import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { limpiarFav } from "../store/favSlice";
import { useAppDispatch } from "../store/hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: React.FC = () => {

    const dispatch = useAppDispatch()

    const onCleanFav = ()=> {
        dispatch(limpiarFav())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={onCleanFav}>Limpiar Favoritos</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos