const dataSource = "https://kea-alt-del.dk/t7/api/products/2801"

fetch("https://kea-alt-del.dk/t7/api/products/2801").then(function (response) {
    return response.json()
}).then(function (obj) {
    console.log(obj)
}).catch(function (error) {
    console.error("Failed to fetch data:", error)
})

// IMPORTING TEMPLATES

const bct1 = document.getElementsByName("#breadcrumbtemp1")
bct1 => bct1.cloneNode(true)
bct1Clone.querySelector("ul").innerHTML = "<li>Home</li><li>`${datasource.brand}`</li>"