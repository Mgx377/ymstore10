const productsContainer = document.getElementById('products-container');

// بيانات المنتجات (يمكن استبدالها ببيانات من قاعدة بيانات)
const products = [
    { name: "حساب كييزا للبيع 🔥", price: 100, image: "IMG-20240531-WA0044.jpg" },
    { name: "Product 2", price: 20, image: "https://via.placeholder.com/300" },
    { name: "Product 3", price: 30, image: "https://via.placeholder.com/300" },
    { name: "Product 4", price: 40, image: "https://via.placeholder.com/300" },
    { name: "Product 5", price: 50, image: "https://via.placeholder.com/300" }
];

// عرض المنتجات
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productCard);
});
