import fetchProductData from "./fetchProductData";
import capitalizeFirstLetter from "../../../funcs/capitalizeFirstLetter";

const fetchData = async (setProductData, setBreadcrumbItems, category, id, productData, ) => {
    try {
        let data = await fetchProductData(category, id);
        data = data[0];

        if (data) {
            console.log(data.productImage)
            setProductData(data);

            const updatedBreadcrumbItems = [
                { label: <i className="fa-solid fa-house"></i>, link: '/' },
                { label: 'Products', link: '/products' },
                { label: `${capitalizeFirstLetter(category)}`, link: `/products/${category}` },
                { label: `${data.productName}` },
            ];

            setBreadcrumbItems(updatedBreadcrumbItems);
        }
    } catch (error) {
        // Handle error if fetchProductData fails
        console.error("Error fetching product data:", error);
    }
};

export default fetchData;