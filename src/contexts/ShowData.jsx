import { createContext, useContext, useState } from "react";

const ShowData=createContext();

function ShowDataProvider({children}){
    const [show_data, setshow_data] = useState(null);
    return (
        <ShowData.Provider value={{show_data,setshow_data}} > 
        {children}
        </ShowData.Provider>
    )
}

function useShowData(){
    const context=useContext(ShowData);
    if(!context) throw new Error("Use show data must be inside the provider");
    return context;
}

export {useShowData,ShowDataProvider}