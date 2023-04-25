/**
 * This is a React component that displays a list of products fetched from an API and allows the user
 * to add them to a cart.
 * @returns The `ProductPage` component is being returned, which renders a header, a list of products
 * fetched from an API, and a button to add each product to the cart.
 */
import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { useDispatch,} from 'react-redux'
import { add } from '../../Store/CartSlice';
import Header from '../Header';
import axios from 'axios';
const ProductPage = () => {
    const dispatch = useDispatch();
    const [products, setProduct] = useState([]);
    const handleAdd = (products) => {
        dispatch(add(products))
        alert('Your product is added in the cart 🎉🫠')
    }
    useEffect(() => {
        try {
            const fetchProducts = async (req, res) => {
                res = await axios.get('https://fakestoreapi.com/products');
                setProduct(res.data);
            }
            fetchProducts();
        }
        catch(err) {
            console.log(err.message);
        }
    }, [])
    return (
        <div className="mainProductsPage">
            <Header />
            <h2> Your Products</h2>
            <div className='productsPageWrapper'>

                {
                    products.map(product => (
                        <div className="ProductPageCard" key={product.id}>
                            <img src={product.image} alt="product img" />
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
