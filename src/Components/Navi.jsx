import React, { useContext } from 'react'
import Brand from '../assets/Img/logo.png'
import '../assets/Style/Navi.scss'
import DataContext from '../context/DataContext'
const Navi = () => {
  const {companyName,kategoriler,setSecilenKategori} = useContext(DataContext);
  return (
    <nav>
      <div className="brand">
        <img src={Brand} alt="marka" />
        <h3>{companyName}</h3>
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