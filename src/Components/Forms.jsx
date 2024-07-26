import React, { useContext } from 'react'
import '../assets/Style/Form.scss'
import DataContext from '../context/DataContext'
const Forms = () => {

  const {kitapEkle,kitaplar,secilenKitap,
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
    handleSubmit
  } = useContext(DataContext);

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