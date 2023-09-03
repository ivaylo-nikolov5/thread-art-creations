import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import "../../../../styles/ProductsStyles/product-images.css"


const ProductImages = (props) => {
    const imagesArray = [
        "https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-3-550x550h.jpg",
        "https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-1-550x550h.jpg",
        "https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-2-550x550h.jpg"
    ]

    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        const dynamicImport = async () => {
            try {
                const imgModule = await import(`../../../../assets/images/products-images/categories/${props.category}/${props.image}`);
                setImgUrl(imgModule.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        dynamicImport();
    }, [props.category, props.image]);

    return (
        <div className='product-images-container'>
            {imgUrl && (
                <AwesomeSlider 
                    animation="cubeAnimation"
                    className="productImagesSlider"
                    transitionDelay={0}
                >
                    <div style={{height: 750}} data-src={imgUrl} />
                    <div style={{height: 750}} data-src="https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-3-550x550h.jpg"></div>
                    <div style={{height: 750}} data-src="https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-1-550x550h.jpg"></div>
                    <div style={{height: 750}} data-src="https://printfactory.bg/image/cache/catalog/Products/Man/Long%20Sleeve/Fruit%20Of%20The%20Loom%20Classic/79-2-550x550h.jpg"></div>
                </AwesomeSlider>
            )}
        </div>
    );
}

export default ProductImages;
