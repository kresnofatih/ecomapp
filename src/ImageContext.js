import React, {useContext, useState} from 'react';

// create Context
const ImgContext = React.createContext();

// export custom useCOntext tags
export function useImage(){
    return useContext(ImgContext)
}

// assign Data to Context provider
export function ImgProvider({children}) {
    const [imgft, setImgft] = useState("");
    //get the Data
    const getData = async () => {
        const resp = await fetch("https://api.jikan.moe/v3/anime/11741");
        console.log(resp);
        const data = await resp.json();
        console.log(data);
        console.log(data.image_url);
        setImgft(data.image_url);
    }
    getData();
    return (
        <ImgContext.Provider value={imgft}>
            {children}
        </ImgContext.Provider>
    )
}