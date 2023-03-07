import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/HttpClient";
import styles from "./MovieDetail.module.css";
export function MovieDetail(){
    
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    useEffect(() =>{
        setIsLoading(true);
        get("/movie/" + movieId).then(data=>{
            setMovie(data);
            setIsLoading(false);
        })
    },[movieId]);
    
    if(isLoading){
        return<div><Spinner/></div>;
    }

    const imageUrl = getMovieImg(movie.poster_path, 400)
    return(
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}  ><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genero:</strong> {" "}
                    {movie.genres.map(genre =>  genre.name).join(", ")}
                </p>
                <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    )
}