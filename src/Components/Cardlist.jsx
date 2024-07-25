import React from 'react'
import Card from './Card'

const Cardlist = ({kitaplar,kitapSil,secilenKategori,cardDuzenle}) => {
  
  return (
    <>
    <h3 style={{marginLeft:"45px"}}>{secilenKategori}</h3>
    <div className='card-list'>
       
    {
     kitaplar.map(kitap=>
      !kitap.isDeleted === true &&
      <Card kitap={kitap} kitapSil={kitapSil} key={kitap.id} cardDuzenle={cardDuzenle}/>
             )
    }
       
     </div>
     </>
  )
}

export default Cardlist