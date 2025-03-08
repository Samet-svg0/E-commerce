import { displayCartTotal, getFromLocalStorage, saveToLocalStorage, updateCardIcon } from "./helper.js";
import { renderCartItems } from "./ui.js";

let cart = getFromLocalStorage();


const addToCart = (e, products) => {
  // add-to-cart butonların tıklandığında butonları birbirinden ayırt etmek için bunlara data-id ile birer uniq id atadık.Bu sayede bu butonların birbirinde farklı olmasını sağladık.

  // Tıklanılan elemanı  id'sine eriş

  const productId = +e.target.dataset.id;

  // Id'si bilinen ürünü product dizisi içerisinden bul

  
  
 const product = products.find((product) => product.id === productId);

 

       

if (product) {

    const exitingItem = cart.find((item)=> item.id === productId);
    if (exitingItem) {
        // Eğer ürün sepette varsa bunun miktarını bir arttır
        exitingItem.quantity++;
    } else {
        // Sepete eklenecek ürün için bir ürün objesi oluştur
        const cartItem = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        };


        cart.push(cartItem);


        updateCardIcon(cart);

       
    }

}


  saveToLocalStorage(cart);

  e.target.innerText = "Added";


  setTimeout(() => {
    e.target.innerText = "Add to cart";
  }, 2000);



};




const removeFromCart = (e) => {

  const productId = parseInt(e.target.dataset.id);

  cart = cart.filter((item)=> item.id !== productId);


  saveToLocalStorage(cart);

  renderCartItems(cart);


  updateCardIcon(cart);



displayCartTotal(cart);

}; 

const onQuantityChange = (e) => {

  const newQuantity = +e.target.value;
    const productId = +e.target.dataset.id;



  if (newQuantity > 0) {
  
  
    const updateItem = cart.find((item) => item.id === productId);
  
    updateItem.quantity = newQuantity;
  
    saveToLocalStorage(cart);

    updateCardIcon(cart);

    displayCartTotal(cart);
  }

};


export { addToCart, removeFromCart, onQuantityChange};
