import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import styles from './Search.module.css';
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    // Se crea una constante para obtener el valor enviado segun el nombre del parametro
    const search = query.get("search");
    const history = useHistory();

    // Para enviar parametros en mi direccion url
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    type="text" 
                    value= {search}
                    placeholder="Title"
                    aria-label="Search Movies"
                    className={styles.searchInput} 
                    onChange={(e) => {
                        const value = e.target.value
                        history.push("/?search=" + value)
                    }}
                />
                <FaSearch size={20} color="black" className={styles.searchButton}/>
            </div>
        </form>
    )
}
