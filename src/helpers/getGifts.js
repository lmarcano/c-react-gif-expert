
export const getGifts = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lfVKKoCO1ta37DJ4eRSG390tV7SbVG9P&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //retornamos un objeto
    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifts;
}