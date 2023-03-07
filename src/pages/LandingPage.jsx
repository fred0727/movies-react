import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    // Para resetear nuestro componente
    const query = useQuery();
    const search = query.get("search");

    // Para que el tiempo de demora despues de soltar el teclado sea de 3 milisegundos
    const debounceSearch = useDebounce(search, 300);

    return(
        <div>
            <Search/>
            <MoviesGrid key={debounceSearch} search={debounceSearch}/>
        </div>
        
    )
}