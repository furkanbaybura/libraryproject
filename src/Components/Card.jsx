import React, { useContext } from 'react'
import '../assets/Style/card.scss'
import Book from '../assets/Img/kitap.jpg'
import DataContext from '../context/DataContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

const Card = ({kitap}) => {
  const {kitapSil,cardDuzenle,search} = useContext(DataContext)
  return (
      (kitap.kitapAdi.toLowerCase().startsWith(search.toLowerCase())||
      kitap.kitapYazari.toLowerCase().startsWith(search.toLowerCase()))&&
    <div className="card">
      <button onClick={()=>kitapSil(kitap.id)} className='delete' ><FaRegTrashAlt size={40}/></button>
      <button onClick={()=>cardDuzenle(kitap.id)} className='edit'><MdOutlineUpdate size={40} /></button>
    <img src={kitap.kitapResmi?kitap.kitapResmi:Book} alt="körlük kapak" />
    <div className="card-body">
   
    <h4>{kitap.kitapAdi}</h4>
    <p>Yazar : {kitap.kitapYazari}</p>
    <p>Kategori : {kitap.kitapKategorisi}</p>
    <p>Sayfa : {kitap.kitapSayfaSayisi}</p>
    <p> Açıklama : {kitap.kitapAciklamasi.substring(0,kitap.kitapAciklamasi.substring(0,100).lastIndexOf(" "))+"..."}</p>
    </div>
    </div>
  )
}

export default Card