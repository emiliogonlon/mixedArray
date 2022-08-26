const dataSource = "https://kea-alt-del.dk/t7/api/products/2801";

fetch(dataSource)
    .then((res) => res.json())
    .then((product) => displayProduct(product))
    .then(console.log("Successfully fetched data."))

function displayProduct(product) {
    console.log("Displaying ", product)
    document.querySelector(".itemName")
}

function fillTemplate(itemInfo, listedProperty){
    document.getElementsByClassName(itemInfo).textContent = listedProperty
    console.log("The ", itemInfo, " field has been populated with the data found in the ", listedProperty, "property of the item information datasheet.")
}

fillTemplate(".price", "product.price")