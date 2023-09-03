const fetchProductData = async (category, id) => {
    try {
      const response = await fetch(`http://localhost:8080/product-data/${category}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      return null;
    }
};

module.exports = fetchProductData;
