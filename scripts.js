const dataSource = "https://kea-alt-del.dk/t7/api/products/2801"

fetch("https://kea-alt-del.dk/t7/api/products/2801").then(function (response) {
    return response.json()
}).then(function (obj) {
    console.log(obj)
}).catch(function (error) {
    console.error("Failed to fetch data:", error)
})

const jCategory = dataSource.category

// IMPORTING TEMPLATES

// function insertCategory (){
//     let catClone = document.getElementById("bc1").cloneNode(true)
//     catClone.textContent = jCategory
//     document.getElementById("bc1").parentElement.appendChild(catClone)
// }

// let bcta = document.getElementById("breadcrumbtempl").childNodes[1]
// let bctb = bcta.cloneNode(true)

// bctb.getElementById("bc1").textContent = `${dataSource.category}`
// bctb.getElementById("bc2").textContent = `${dataSource.gender}`
// bctb.getElementById("bc3").textContent = `${dataSource.season}`

// document.querySelector("#breadcrumb").appendChild(bctb) 

const ul = document.getElementById("bcul")

const fragment = new DocumentFragment()

for (const char of dataSource) {
    const li = document.createElement("li")
    li.textContent = char
    fragment.append(li)
}

ul.append(fragment)