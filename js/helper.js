import { elements } from "./ui.js";

const saveToLocalStorage = (cart) => {
 // Dışarıdan verilen elemanı  JSON.stringify ile stringe çevir ve localstorage'a ekle
 localStorage.setItem("cart",JSON.stringify(cart));


};

const getFromLocalStorage = () => {


  // LocalStorage'daki cart key'ine sahip elemanları localstorage'dan al
  const strData = localStorage.getItem("cart");

  // Eğer localstorage'da veri varsa bunu JSON.parse ile dönüştür ve return et ama yoksa boş bir dizi return et
  return strData ? JSON.parse(strData) : [];

};





const updateCardIcon = (cart) => {

const cartIcon = document.querySelector("#cart-icon");

const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

cartIcon.setAttribute("data-quantity",totalQuantity);

};



//sepetteki toplam fiyati hesaplayan fonk

const calculateCartTotal = (cart) => {

  return cart.reduce((total,product) => total +product.price * product.quantity,0);
};


const displayCartTotal = (cart) => {

const total = calculateCartTotal(cart);
  elements.cartTotal.textContent=`Total: $ ${total.toFixed(2)}`;
};


export {saveToLocalStorage, getFromLocalStorage, updateCardIcon, calculateCartTotal,displayCartTotal,};