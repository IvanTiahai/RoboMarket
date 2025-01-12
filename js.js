let productGrid = document.getElementById('product-grid')
let productsArray = []
let url = 'https://my-json-server.typicode.com/RoboUmanAdm/market'

fetch(url + '/product')
    .then(async function (response){
        let product = await response.json()
        productGrid.innerHTML = null
        product.forEach(p => {
            productsArray.push(p)
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML=`
            <h2 class='product-name'>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}'>
            <p class='product-price'>${p.price}</p>
            <p class='product-description'>${p.description}</p>
            <a href=''>sell profile</a>
            <button>buy</button>
            `
        });
    })
    



function fun(){

}