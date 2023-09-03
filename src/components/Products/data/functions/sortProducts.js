const sortProducts = (products, criteria, defProducts) => {
    let sortedProducts = [...products];

    switch (criteria) {
        case "nameA":
            sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
            break;
        case "nameZ":
            sortedProducts.sort((a, b) => b.productName.localeCompare(a.productName));
            break;
        case "priceI":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "priceD":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "ratingI":
            // Implement your rating sorting logic here
            break;
        case "ratingD":
            // Implement your rating sorting logic here
            break;
        default: 
            sortedProducts = defProducts;
    }

    return sortedProducts;
}

export default sortProducts;
