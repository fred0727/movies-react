import { useLocation } from "react-router-dom";

// Tomando el parametro pasado por la url
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}
  