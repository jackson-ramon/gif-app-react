import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    // useEffect: hook de React que sirve para disparar 
    // efectos secundarios (procesos a ejecutar cuando algo suceda)
    useEffect( () => {
        getImages();
    }, [ ]) // [ ] -> arreglo de dependencias vacio significa que el hook se diaprara solo la primera vez que se ejecuta y construye el hoook



    return {
        images,
        isLoading
    }
}
