async function fetchData() {
   try {
        const data = await fetch('https://simple-grocery-store-api.glitch.me/products');
        const resultedData = await data.json();
        console.log(resultedData)
        createElement(resultedData);
    } catch (error) {
        console.error('Error fetching the data', error);
    }
}

function createElement(items){
    let outerbox = document.getElementById('container')
    items.forEach(item => {
        let container = document.createElement('div')
        container.className = "item-container";
        let category = document.createElement('h2');
        category.innerText = item.category;
        let name = document.createElement('p');
        name.innerText = item.name;
        console.log(name)
        let instock = document.createElement('p')
        instock.innerHTML = item.inStock?"Instock":"Sold Out";
        instock.style.color = item.inStock?"green":"red";
        console.log(instock)
        console.log(category);
        container.append(category,name,instock)
        outerbox.appendChild(container)

    });
}
fetchData();