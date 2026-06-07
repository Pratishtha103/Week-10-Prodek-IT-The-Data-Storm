import { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

import {useDispatch} from 'react-redux';

import { addToCart } from '../features/cart/cartSlice';

function Shop(){
    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data.products);
            setLoading(false);
            }
        )
        .catch((e)=>console.error(e))
    },[]);
    
    function productDetails(id){

    }
    return(
        <div className="p-6">
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center p-2">
                {loading?(
                    <p className="p-6">Loading Products...</p>
                ):(
                    products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div key={product.id} className="w-74 border-2 rounded-lg p-2">
                            <img src={product.thumbnail} alt={product.title}/>
                            <p>{product.title}</p>
                            <p className="text-amber-400 font-bold">${product.price}</p>
                            <div className="flex flex-row justify-between items-end">
                                <div>
                                    <p className="text-green-400">{product.discountPercentage} % OFF</p>
                                    <p>{product.rating} &#9733;</p>
                                </div>
                                
                                <button
                                    className="
                                    bg-green-600
                                    text-white
                                    hover:bg-[#333] 
                                    hover:text-green-600
                                    border-2 
                                    rounded-lg 
                                    h-10
                                    p-2
                                    cursor-pointer"
                                    onClick = {(e)=>{
                                        e.preventDefault();
                                        dispatch(addToCart(product));
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </Link>
                    ))
                )}
            </div>
        </div>
    )
}
export default Shop;