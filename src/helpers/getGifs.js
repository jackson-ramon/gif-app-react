export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=cKmXb00JnPLUw0Icksvtqu0CmZfpFOyO&q=${ category }&limit=10`;
    const resp = await fetch( url );
    
    // Para especificar que lo que se desestructura es un arreglo
    // const { data = [] } = await resp.json();
    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}