function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((information) => {
        const returnedProduct = information.products.slice(1, 8);
        generateProductCards(returnedProduct);
      });
  }

function generateProductCards(information) {
    const productContainer = document.getElementById("Products");
    for (const product of information) {
      const lists = document.createElement("div");
      lists.classList.add("product-card");
      lists.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.name}" />
        <h2>${product.title}</h2>
        <div class='productPrice'>
          <p>${product.price}</p>
       
        </div>
      `;
      productContainer.appendChild(lists);
    }
  }
  
  fetchProducts();

