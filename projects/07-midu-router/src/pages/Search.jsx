import { useEffect } from "react"

export default function SearchPage({routerParams}){
    
    useEffect(()=>{
        document.title= `Has Buscado ${routerParams.query}`
    },[])
    
    return (
        <h1>Has buscado {routerParams }</h1>
    )
}