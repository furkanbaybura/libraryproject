import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/Style/search.scss'
import { RiFileSearchFill } from "react-icons/ri";

const SearchBar = () =>{
    const {secilenKategori,setSearch} = useContext(DataContext)
    return (
        <div className='search'><h3 style={{marginLeft:"45px"}}>{secilenKategori}</h3>
         <RiFileSearchFill size={25}/>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Ara'/>
       
        </div>
    )
}
export default SearchBar