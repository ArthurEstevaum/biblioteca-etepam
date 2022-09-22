import NavBar from "./NavBar";
import Head from "next/head";
import { useState, createContext } from "react";
import react from "react";
export const inputContext = createContext("")

export default function Layout({ children }) {

    //gerenciar o state do input da navbar
    const [inputValue, setInputValue] = useState()
    const handleInputValue = (event) => {setInputValue(event.target.value)}

    return (
        <>
            <Head>
                <title>Biblioteca ETEPAM</title>
            </Head>
            <inputContext.Provider value={inputValue}>
                <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
                    <NavBar handleInputValue={handleInputValue} />
                    { children }
                </div>
            </inputContext.Provider>
        </>
    )
}