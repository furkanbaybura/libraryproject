import React, { useEffect, useState } from 'react'
import Navi from './Components/Navi'
import Forms from './Components/Forms'
import Cardlist from './Components/Cardlist'
import axios from 'axios'
// import { kitaplik,kategoriler as categories} from './data/data'


const App = () => {
 
  const companyName = "Furkinin Kitap Dükkanı";
  
  //const[stateAdi,stateMetodu] = useState(initialValue)
  const [kitaplar,setKitaplar] = useState([]);
  const [kategoriler,setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");
  const [secilenKitap,setSecilenKitap] = useState("");


const kitapEkle = async (yeni) =>{
  let url = "http://localhost:3005/kitaplar";
  if(!secilenKitap){//kitapekleme bölümü 
 //ön yüze ekleme
 setKitaplar(prev=>[...prev,yeni]);
 //backende ekleme
 
 const response = await axios.post(url,yeni);
  }
  //kitap düzenleme 
  else{
    url += `/${secilenKitap.id}`;
    const response2 = await axios.put(url,yeni);
    setKitaplar(prev=>
      prev.map(kitap=>{
        if(kitap.id === secilenKitap.id)
          return {...response2.data}
        else{
          return {...kitap}
        }
      })
    )
  }
 
  
} 

const kitapSil = async (id) => {  
  //frontend silme
  setKitaplar(prev=>prev.filter(statedenGelen=>statedenGelen.id!==id))
  //backend silme
  const url = `http://localhost:3005/kitaplar/${id}`
  // const response = await axios.delete(url)
  const response = await axios.patch(url,{isDeleted : true})

} 

const kitaplariGetir = async () => { 
  let url = "http://localhost:3005/kitaplar"
  if(secilenKategori && secilenKategori!=="Tüm Kitaplar"){
    url+=`?kitapKategorisi=${secilenKategori}`

  }
  const response = await fetch(url);
  const kitaplar = await response.json();
  setKitaplar(kitaplar);
}





const kategorileriGetir = async () => {
  const url = "http://localhost:3005/kategoriler"
  const response = await axios.get(url)
  const kategoriler = await response.data;
  setKategoriler(kategoriler);
}

const cardDuzenle = (id) =>{
setSecilenKitap(kitaplar.find(item=>item.id===id))
console.log(kitaplar.find(item=>item.id===id));

}

useEffect(()=>{ 
  kategorileriGetir();
},[])

useEffect(()=>{
  kitaplariGetir();
  
},[secilenKategori])




  return (
    <>
     
     <Navi navHead={companyName} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
     <Forms secilenKitap={secilenKitap} kitapEkle={kitapEkle} kitaplar={kitaplar}/>
     <Cardlist kitaplar={kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori} cardDuzenle={cardDuzenle}/>
     
    
    </>
  )
}

export default App