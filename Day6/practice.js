
    const fetchfn = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      createCards(data.products);
    };

    function createCards(products) {
      const container = document.getElementById('card-container');

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.images[0];

        const title = document.createElement('h2');
        title.innerText = product.title;

        const desc = document.createElement('p');
        desc.innerText = product.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);

        container.appendChild(card);
      });
    }

    fetchfn();