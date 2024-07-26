import axios from "axios";
import { createContext, useEffect, useState } from "react";



const DataContext = createContext();

export const DataProvider = ({children})=>{

    const companyName = "Furkinin Kitap Dükkanı";
      const [kitaplar,setKitaplar] = useState([]);
    const [kategoriler,setKategoriler] = useState([]);
    const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");
    const [secilenKitap,setSecilenKitap] = useState("");
    const [kitapAdi,setKitapAdi] = useState("");
    const [kitapYazari,setKitapYazari] = useState("");
    const [kitapKategorisi,setKitapKategorisi] = useState("Kategori Seçiniz");
    const [kitapSayfaSayisi,setKitapSayfaSayisi] = useState("");
    const [kitapResmi,setKitapResmi] = useState("");
    const [kitapAciklamasi,setKitapAciklamasi] = useState("");
    const [search,setSearch] =  useState("");
  
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
  const handleSubmit = (e) => {
    e.preventDefault();
    kitapEkle({
      id:(Number(kitaplar[kitaplar.length-1].id)+1).toString(),
      kitapAdi:kitapAdi,
      kitapYazari:kitapYazari,
      kitapKategorisi:kitapKategorisi,
      kitapSayfaSayisi:kitapSayfaSayisi,
      kitapResmi:kitapResmi,
      kitapAciklamasi:kitapAciklamasi
    });
    setKitapAdi("");
    setKitapYazari("");
    setKitapKategorisi("Kategori Seçiniz");
    setKitapSayfaSayisi("");
    setKitapResmi("");
    setKitapAciklamasi("");



  }
  
  useEffect(()=>{ 
    kategorileriGetir();
    kitaplariGetir();
  },[])
  
  useEffect(()=>{
    if(secilenKitap){
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setKitapKategorisi(secilenKitap.kitapKategorisi);
      setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
      setKitapResmi(secilenKitap.kitapResmi);
      setKitapAciklamasi(secilenKitap.kitapAciklamasi);
    }

  },[secilenKitap])

    return <DataContext.Provider value={{
        companyName,kategoriler,setSecilenKategori, //nav comp
        secilenKitap, 
        kitapAdi,
        kitapYazari,
        kitapKategorisi,
        kitapResmi,
        kitapSayfaSayisi,
        kitapAciklamasi,
        setKitapAdi,
        setKitapYazari,
        setKitapKategorisi,
        setKitapResmi,
        setKitapSayfaSayisi,
        setKitapAciklamasi,
        handleSubmit, // form comp
        kitaplar,secilenKategori, // cardlist comp
        kitapSil,cardDuzenle, // card comp
        search,setSearch
    }}>
            {children}
          </DataContext.Provider>
}
export default DataContext
