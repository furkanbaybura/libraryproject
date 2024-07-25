import React from 'react'
import Brand from '../assets/Img/logo.png'
import '../assets/Style/Navi.scss'
const Navi = ({navHead,kategoriler,setSecilenKategori}) => {
  return (
    <nav>
      <div className="brand">
        <img src={Brand} alt="marka" />
        <h3>{navHead}</h3>
      </div>
      <div className="liste">
        {
          kategoriler.map(kategori=>
            <li onClick={(e)=>setSecilenKategori(e.target.innerText)} key={kategori.kategoriId}> 
              {kategori.kategoriAdi}</li>
          )
        }
      </div>
    </nav>
  )
}

export default Navi