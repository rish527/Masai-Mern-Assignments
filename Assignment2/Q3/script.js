let products = [];
const chartContainer = document.getElementById('chart-container');

// Get DOM elements
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productRatingInput = document.getElementById('product-rating');
const addProductButton = document.getElementById('add-product');

const sortPriceButton = document.getElementById('sort-price');
const sortRatingButton = document.getElementById('sort-rating');

function drawChart(){
    chartContainer.innerHTML='';

    const maxPrice=Math.max(...products.map(p=>p.price),0);
    const maxRating=Math.max(...products.map(p=>p.rating),0);

    products.forEach(product=>{
        const priceBarHeight=(product.price/maxPrice)*200;
        const ratingBarHeight=(product.rating/maxRating)*200;

        //PriceBar
        const priceBar=document.createElement('div');
        priceBar.className='bar price-bar';
        priceBar.style.height=`${priceBarHeight}px`;
        priceBar.innerHTML=`
            <div class="bar-label">$${product.price}</div>
            <div class="bar-label">${product.name}</div>
        `;

        //Rating bar
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar rating-bar';
        ratingBar.style.height = `${ratingBarHeight}px`;
        ratingBar.innerHTML = `
            <div class="bar-label">${product.rating}</div>
            <div class="bar-label">${product.name}</div>
        `;


        
        chartContainer.appendChild(priceBar);
        chartContainer.appendChild(ratingBar);
    })
}

function addProduct() {
    const name = productNameInput.value;
    const price = parseFloat(productPriceInput.value);
    const rating = parseFloat(productRatingInput.value);

    if (name && price && rating) {
        products.push({ name, price, rating });
        drawChart();
        clearInputs();
    } else {
        alert("Please enter valid product data.");
    }
}

function clearInputs() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productRatingInput.value = '';
}

addProductButton.addEventListener('click', addProduct);
sortPriceButton.addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    drawChart();
});