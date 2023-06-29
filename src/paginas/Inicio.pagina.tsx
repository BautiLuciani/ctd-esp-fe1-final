import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../store/hooks";
import { cleanFilter } from "../store/personajesSlice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */


const PaginaInicio: React.FC = () => {

    const dispatch = useAppDispatch()

    /**
     * Funcion que limpia el valor del filtro
     * Dentro del filtro se encuentra lo que el usuario esta buscando en el input
     * No requiere ningun parametro ni retorna nada
     * @author Bautista Luciani
     */
    const onCleanFilter = ()=> {
        dispatch(cleanFilter())
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={ onCleanFilter }>Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio