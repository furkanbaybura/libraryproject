import React from 'react'
import '../assets/Style/card.scss'
import Book from '../assets/Img/kitap.jpg'
const Card = ({kitap,kitapSil,cardDuzenle}) => {
  
  return (
    <div className="card">
      <button onClick={()=>kitapSil(kitap.id)} className='delete' >Sil</button>
      <button onClick={()=>cardDuzenle(kitap.id)} className='edit'>Güncelle</button>
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