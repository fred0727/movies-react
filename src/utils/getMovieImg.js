export function getMovieImg(path, width){
    return path  
    ? `https://image.tmdb.org/t/p/w${width}${path}` 
    : "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
}