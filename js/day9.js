const fetchDisplayProduct = async () => {
    const URL = "https://fakestoreapi.com/products"
    try {
        const response = await fetch(URL)
        const products = await response.json()
        displayProducts(products)

    } catch (error) {
        console.log("Error message", error);
        alert("Error displaying product,check console for more information")
    }
}


// function to display on our document
const displayProducts = (products) => {
    const productList = document.querySelector('.productList')

    let productHTML = ""

    products.forEach(product => {
        console.log(product);

        productHTML += `
                <div class="w-full rounded-md shadow p-3 m-2">
                    <h1 class= "text-4xl font-bold uppercase text-center">${product.title}</h1>+
                    <img src="${product.image}" alt="${product.title.slice(0, 3)}" class="w-[15rem] mx-auto rounded-md">
                    <p class ="text-center text-md text-gray-400">${product.description} </p>
                    <p class="text-sm">${product.category}</p>
                    <p class="text-red-500 font-bold text-md">${product.price}</p>
                    <span>${product.rating.rate} (${product.rating.count} reviews)<span></span>
                    </div>`
        productList.innerHTML = productHTML
    });

}

fetchDisplayProduct()