import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { useDispatch,} from 'react-redux'
import { add } from '../../Store/CartSlice';
import Header from '../Header';
const ProductPage = () => {
    const dispatch = useDispatch();
    const [products, setProduct] = useState([]);
    const handleAdd = (products) => {
        dispatch(add(products))
        alert('Your product is added in the cart')
    }
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProduct(data);
        }
        fetchProducts();
    }, [])
    return (
        <div className="mainProductsPage">
            <Header />
            <h2> Your Products</h2>
            <div className='productsPageWrapper'>

                {
                    products.map(product => (
                        <div className="ProductPageCard" key={product.id}>
                            <img src={product.image} alt="product image" />
                            <h4 className='title'>{product.title}</h4>
                            <h5 className='price'>{product.price}</h5>
                            <button className='btn' onClick={() => handleAdd(products)}>Add to cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPage
