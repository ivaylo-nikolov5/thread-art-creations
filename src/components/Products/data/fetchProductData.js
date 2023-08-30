const fetchProductData = async (category, id) => {
    try {
      const response = await fetch(`http://localhost:8080/product-data/${category}/${id}`);
      const data = await response.json();
      console.log("Product data:", data);
      // Use the product data as needed
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
};

module.exports = fetchProductData;
