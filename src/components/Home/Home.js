import React, { useEffect, useState } from 'react';
import './Home.css';
import { getallProduct } from '../../api/api'; // Assuming this file is in the correct relative path
import { Link } from 'react-router-dom';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getallProduct();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='productgrid'>
            {products.map((product) => (
                <div className='product' key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>
                        <span>Rs {product.price}</span>
                    </p>
                    <Link to={`/productinfo/${product.id}`}>
                        <button>Product Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
