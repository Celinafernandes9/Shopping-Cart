import React from "react";
import { useCart } from "react-use-cart";

export const Product = () => {
  const data = [
    {
      id: 1,
      name: "English Blossom",
      price: 200,
      desc: "Yardley London English Blossom Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/english-blossom.jpg",
    },
    {
      id: 2,
      name: "English Lavender",
      price: 213,
      desc: "Yardley London English Lavender Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/english-Lavender.jpg",
    },
    {
      id: 3,
      name: "English Musk",
      price: 180,
      desc: "Yardley London English Musk Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/english-Musk.jpg",
    },
    {
      id: 4,
      name: "English Rose",
      price: 213,
      desc: "Yardley London English Rose Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/english-Rose.jpg",
    },
    {
      id: 5,
      name: "English Sandalwood",
      price: 200,
      desc: "Yardley London English Sandalwood Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/imperial-Sandal.jpg",
    },
    {
      id: 6,
      name: "Royal Bouquet",
      price: 220,
      desc: "Yardley London Royal Bouquet Body Moisturinging lotion 100g",
      imageUrl: "./Image/Lotion/royal-Bouquet.jpg",
    },
    {
      id: 7,
      name: "English BlueBell ",
      price: 1300,
      desc: "Yardley London English Bluebell - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/bluebell.jpg",
    },
    {
      id: 8,
      name: "English Daisy",
      price: 1220,
      desc: "Yardley London English Daisy - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/Daisy.jpg",
    },
    {
      id: 9,
      name: "Royal Diamond",
      price: 1181,
      desc: "Yardley London Royal Daimond - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/Diamond.jpg",
    },
    {
      id: 10,
      name: "Jasmine",
      price: 1249,
      desc: "Yardley London Jasmine - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/Jasmine.jpg",
    },
    {
      id: 11,
      name: " English Lavender",
      price: 1300,
      desc: "Yardley London English Lavender - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/Lavender.jpg",
    },
    {
      id: 12,
      name: "English Rose",
      price: 1110,
      desc: "Yardley London English Rose - Eau De Toilette For Women, 125 ml",
      imageUrl: "./Image/perfume/Rose.jpg",
    },
    {
      id: 13,
      name: "English Blossom",
      price: 1,
      desc: "Yardley London English Blossom Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/EngBlossom_Talc.jpg",
    },
    {
      id: 14,
      name: "Equity",
      price: 232.7,
      desc: "Yardley London Equity Talcum Powder For Men 250g",
      imageUrl: "./Image/Talcum/EquityTalc-blue.jpg",
    },
    {
      id: 15,
      name: "English Rose",
      price: 229,
      desc: "Yardley London English Rose Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/floral-ERose.jpg",
    },
    {
      id: 16,
      name: "Imperial Jasmine",
      price: 232,
      desc: "Yardley London Imperial Jasmine Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/floral-Jasmine.jpg",
    },
    {
      id: 17,
      name: "Imperial Sandalwood",
      price: 396.99,
      desc: "Yardley London Imperial Sandalwood Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/floral-Sandal.jpg",
    },
    {
      id: 18,
      name: "English Lavender",
      price: 170.37,
      desc: "Yardley London English Lavender Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/Lavender.jpg",
    },
    {
      id: 19,
      name: "Arthur",
      price: 245,
      desc: "Yardley London Arthur Perfumed Talc for Men 250g",
      imageUrl: "./Image/Talcum/Mens-Arthur.jpg",
    },
    {
      id: 20,
      name: "Gentelmens Classic",
      price: 487.73,
      desc: "Yardley London Gentelmens Classic Perfumed Talc for Men 250g",
      imageUrl: "./Image/Talcum/Mens-GM-Classic.jpg",
    },
    {
      id: 21,
      name: "Original",
      price: 294,
      desc: "Yardley London Original Perfumed Talc for Men 250g",
      imageUrl: "./Image/Talcum/Mens-Original.jpg",
    },
    {
      id: 22,
      name: "Royal Bouquet",
      price: 207,
      desc: "Yardley London Royal Bouquet Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/RoyalBouquet_Talc.jpg",
    },
    {
      id: 23,
      name: "Royal Red Roses",
      price: 184,
      desc: "Yardley London Royal Red Rose Perfumed Talc 250g",
      imageUrl: "./Image/Talcum/floral-R-Roses.jpg",
    },

  ];


  const {addItem} = useCart();

  const handelAdd=(product)=>{
    addItem(product)
  }
 
  return (
    <>
    <div>
     <h1 style={{marginTop:'6rem', justifyContent:'center', alignItems:'center', textAlign:'center'}}>All Product</h1>
    </div>
      <div className="product d-flex">
       
        {data.map((products , id)=>(
          <div className="card" key={products.id}>
            <div style={{height:'16rem', overflow:'hidden', display:'flex'}}>
              <img
              src={products.imageUrl}
              className="card-img-top img-fluid"
              alt={products.name}
            />
            </div>
            
            <div className="card-body">
              <h5 className="card-title fw-bold">{products.name}</h5>
              <p className="card-text fw-semibold">{products.desc}</p>
              <p className="card-price fw-bold"><i className="bi bi-currency-rupee"/>{products.price}</p>
              <button to="/cart" className="btn btn-primary" onClick={()=>handelAdd(products)}>
                ADD TO CART
              </button>
            </div>
          </div>
       ))}
      </div>
    </>
  );
};
