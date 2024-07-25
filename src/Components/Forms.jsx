import React, { useEffect, useState } from 'react'
import '../assets/Style/Form.scss'
const Forms = ({kitapEkle,kitaplar,secilenKitap}) => {
  const [kitapAdi,setKitapAdi] = useState("");
  const [kitapYazari,setKitapYazari] = useState("");
  const [kitapKategorisi,setKitapKategorisi] = useState("Kategori Seçiniz");
  const [kitapSayfaSayisi,setKitapSayfaSayisi] = useState("");
  const [kitapResmi,setKitapResmi] = useState("");
  const [kitapAciklamasi,setKitapAciklamasi] = useState("");

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
    if(secilenKitap){
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setKitapKategorisi(secilenKitap.kitapKategorisi);
      setKitapSayfaSayisi(secilenKitap.kitapSayfaSayisi);
      setKitapResmi(secilenKitap.kitapResmi);
      setKitapAciklamasi(secilenKitap.kitapAciklamasi);
    }

  },[secilenKitap]


)
  return (
    <form onSubmit={handleSubmit}>
      <h3>{secilenKitap?"Kitabı Güncelle":"Kitap Ekle"}</h3>
      <input value={kitapAdi} onChange={e=>setKitapAdi(e.target.value)} type='text' placeholder='Kitap Adı' />
      <input value={kitapYazari} onChange={e=>setKitapYazari(e.target.value)} type='text' placeholder='Kitap Yazarı' />
      <select value={kitapKategorisi} onChange={e=>setKitapKategorisi(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Finans</option>
        <option>Diğer</option>
      </select>
      <input value={kitapSayfaSayisi} onChange={e=>setKitapSayfaSayisi(e.target.value)} type='number' placeholder='Sayfa Sayısı'/>
      <input value={kitapResmi} onChange={e=>setKitapResmi(e.target.value)} type='url' placeholder='Kitap Resmi(url)'/>
      <textarea value={kitapAciklamasi} onChange={e=>setKitapAciklamasi(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
      <input disabled={kitapAdi==="" || kitapYazari==="" || kitapKategorisi==="Kategori Seçiniz"||kitapSayfaSayisi===""||kitapAciklamasi===""} type='submit' value={secilenKitap?"Kitabı Güncelle":"Kitap Ekle"}/>
    </form>
  )
}

export default Forms