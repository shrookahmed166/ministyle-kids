// فانكشن حساب المقاس
function getSize(){
  var age = document.getElementById('age').value;
  var msg = "";
  if(age == ""){ 
    msg = "Please enter your age"; 
  }
  else if(age <= 18){ 
    msg = "Your Size: S"; 
  }
  else if(age <= 24){ 
    msg = "Your Size: M"; 
  }
  else if(age <= 30){ 
    msg = "Your Size: L"; 
  }
  else if(age <= 40){ 
    msg = "Your Size: XL"; 
  }
  else{ 
    msg = "Over 40 years old, please contact us for special size"; 
  }
  document.getElementById('result').innerHTML = msg;
}

// كود السلة
let cart = [];
let totalPrice = 0;

function addToCart(productName, price){
  cart.push({name: productName, price: price});
  totalPrice = totalPrice + price;
  
  document.getElementById('count').innerText = cart.length;
  document.getElementById('total').innerText = totalPrice;
  
  alert(productName + " Added to cart! \nTotal: $" + totalPrice);
}