//este es un hook personalizado
//Un hook no es mas que una funcion

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images,setImages]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const getImages=async()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //Use efect sirve para disparar efectos secundarios 
    useEffect(()=>{
        getImages();
    },[ ])

 return {
    images,
    isLoading
 }
}
