

function generateProductCards(data) {
    const productContainer = document.getElementById("Products");
    // iterate through the data and create a card for each product
    data.forEach((product) => {
      // create a card element
      const card = document.createElement("div");
      card.classList.add("product-card");
      // Set the card content using the product data
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
            
              </div>
          `;
      // append the card to the product container
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Get the first 8 products from the data
        const returnedData = data.products.slice(2,10);
        // call the function to generate cards
        generateProductCards(returnedData);
      });
  }
  fetchProducts();
  

// let productContainer = document.getElementById('products')

// const getProducts = ()=>{
//     return fetch('https://dummyjson.com/products')
//     .then(response =>response.json())
//     .then(response =>response)
//     .catch(error =>error.message)
// }
// // getProducts();

// const displayProducts = async() =>{
//     const products = await getProducts();
//     console.log(products.products);
//     products.products.map(item=>{
//         let div = document.createElement('div');
//         div.className ='people'
        

//         let img=document.createElement('img');
//         let title=document.createElement('h2');
//         let description=document.createElement('P');
//         let price=document.createElement('h3')
//         let itemName=document.createElement('p')
        
//         // let img = document.createElement('img');
//         // let names = document.createElement('h2');
//         // let userName = document.createElement('p');
         
//     //  img = document.createElement('img')
//         img.src = item.image;
//         title.innerHTML=item.title;
//         description.innerHTML=item.description;
//         price.innerHTML=item.price;
//         div.appendChild(img);
//         div.appendChild(title);
//         div.appendChild(description);
        
//         productContainer.appendChild(div);



//         // names.innerHTML = `${item.firstName} ${item.lastName}`;
//         // userName.innerHTML= item.username;
//         // div.appendChild(img);
//         // div.appendChild(names);
//         // div.appendChild(userName);
//         // userContainer.appendChild(div);

//     })
    

// }
// displayProducts();
// // item.images.forEach(function(image) {
// //     var img = document.createElement('img');
// //     img.src = image;
// //     div.appendChild(img)
