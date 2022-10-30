import NavBar from "./NavBar";
import Head from "next/head";
import { NextPage } from "next";
import React, { useState, createContext, PropsWithChildren, SyntheticEvent, HtmlHTMLAttributes, ComponentState } from "react";
export const inputContext = createContext("")

export type HandleInputValue = {
    handleInputValue: (event: React.FormEvent<HTMLInputElement>) => void
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

    //gerenciar o state do input da navbar
    const [inputValue, setInputValue] = useState<string>('')
    const handleInputValue: (event: React.FormEvent<HTMLInputElement>) => void = (event: React.FormEvent<HTMLInputElement>) => {setInputValue(event.currentTarget.value)}

    return (
        <>
            <Head>
                <title>Biblioteca ETEPAM</title>
            </Head>
            <inputContext.Provider value={inputValue}>
                <div className="bg-gray-100 bg-cover min-h-screen" style={{backgroundImage: 'url(/background.png)'}}>
                    {/*@ts-ignore*/}
                    <NavBar handleInputValue={handleInputValue}  />
                    { children }
                </div>
            </inputContext.Provider>
        </>
    )
}

export default Layout