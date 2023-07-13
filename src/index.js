import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CiDollar } from 'react-icons/ci';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./css/styles.css"
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Product from "./product";


const baseUrl = "https://fakestoreapi.com/products"
// function Choice(){
//    const sum=0
//    chosen_things=[
//       {},
//       {},
//       {}
//    ]
//    return(
//       <div>
//          {this.chosen_things.map((pr) =>(
//             <div>
//                <h5>{pr.title}</h5>
//                <p>{pr.price}<CiDollar/></p>
//             </div>
//          ))}
//          <h4>Итого: {sum}<CiDollar/></h4>
//       </div>
//    )
// }

function Products() {


   const [listProducts, setListProducts] = useState();

   useEffect(() => {
      
      axios.get(baseUrl).then((resp) => {
         setListProducts(resp.data);
         console.log(resp.data)
      });
   }, []);

   if (!listProducts) return (
      <div>
         товаров нет
      </div>
   );
   return (
      <div className="all-products">
         {listProducts.map((pr) => (
            <div className="product">
               <h5>{pr.title}</h5>
               <img src={pr.image} className="images" />
               <div className="button-price">
                  {/* <Routes>
                     <Route path="/" element={<Product/>}>to</Route>
                  </Routes> */}
                  <p>{pr.price}<CiDollar /></p>
                  <button type="button" id="teleghka"><AiOutlineShoppingCart /></button>
               </div>
            </div>
         ))}
      </div>
   )
}

function Balance() {
   const myBalance = 120

   return (<div className="balance-bar">
      <h3>Мой баланс {myBalance}<CiDollar /></h3>
      <button type="button" id="send-button" >Перевести <CiDollar /></button>
      <h3>Мой выбор</h3>
      {/* <Choice/> */}
      <button type="button" id="send-button">Подтвердить <CiDollar /></button>
      <p id="inf">После подтверждения вам будет направлена информация, как получить выбранные вами товары</p>
      <button type="button" id="reset-button">Сбросить выбор </button>

   </div>
   )
}

function BonusBar() {
   const [filtrList, setFiltrList] = useState({ open: false });

   const handleFiltrList = () => {
      setFiltrList({ open: !filtrList.open })
   }
   return (<div>
      <div className="bonus-bar">
         <p id="bonus">БОНУС БАР</p>
         <p id="souvenirs">СУВЕНИРЫ</p>
         <p id="filtr">Все товары
            <button type="button" id="filtr-list-button" onClick={handleFiltrList}>
               <AiFillCaretDown />
            </button>

         </p>
      </div>
      {filtrList.open && (
         <div id="filtr-list">
            <ul>
               <li>
                  <button type="button" className="filtr-buttons" >Цена по возрастанию</button>
               </li>
               <li>
                  <button type="button" className="filtr-buttons" >Цена по убыванию</button>

               </li>
            </ul>
         </div>
      )}
   </div>
   )
}






function App() {
   return (<div>
      <Balance />
      <BonusBar />
      <Products />
      

   </div>
   )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <App />
)
