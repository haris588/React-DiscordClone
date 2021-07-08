import React, { useState, createContext } from 'react'

export const Context = createContext()

export function ContextProvider({ children }) {
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)

    const handleVisibile = () => {
        window.addEventListener("load", () => {
            setVisible1(true)
        })

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (window.innerHeight > window.innerWidth) {
                if (currentScroll >= 750) {
                    setVisible2(true)
                }
                if (currentScroll >= 1300) {
                    setVisible3(true)
                }
                if (currentScroll >= 1650) {
                    setVisible4(true)
                }
            } 
            
            else if (window.innerWidth > window.innerHeight){
                if (currentScroll >= 750) {
                    setVisible2(true)
                }
                if (currentScroll >= 1350) {
                    setVisible3(true)
                }
                if (currentScroll >= 1950) {
                    setVisible4(true)
                }
            }

        });
    }

    return (
        <Context.Provider value={{
            visible1,
            visible2,
            visible3,
            visible4,
            handleVisibile
        }}>
            {children}
        </Context.Provider>
    )
}