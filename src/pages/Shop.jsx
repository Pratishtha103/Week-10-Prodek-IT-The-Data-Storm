import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux';
import { setMaxPrice } from "../features/filters/filterSlice";
import { addToCart } from '../features/cart/cartSlice';

import  FilterSidebar  from "../components/FilterSidebar";

import {Filter, X} from 'lucide-react';

function Shop(){
    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(true);

    const [showFilters, setShowFilters] = useState(false); //for sidebar

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
    
    const filters = useSelector(
        state=>state.filters
    );

    const filteredProducts = useMemo(() => {

        return products.filter(product => {

            const matchesCategory =
                filters.category === "all" ||
                product.category === filters.category;

            const matchesPrice =
                product.price <= filters.maxPrice;

            return (
                matchesCategory &&
                matchesPrice
            );
        });

    }, [products, filters]);
    // products in a category
    const categoryProducts =
        filters.category === "all"
            ? products
            : products.filter(
                product =>
                    product.category === filters.category
            );
    // highest price of products in a category
    const highestPrice = products.length > 0
        ? Math.max(...categoryProducts.map(product => product.price))
        : 1000;
    // update max price in initial state
    useEffect(() => {
        dispatch(setMaxPrice(highestPrice));
    }, [highestPrice, dispatch]);
    return(
        <div className="p-6">
            <button
                onClick={() =>
                    setShowFilters(true)
                }
            >
                <Filter/>
            </button>
            {showFilters && (
                    <div
                        className="fixed 
                        top-0 left-0
                        h-full w-72
                        backdrop-blur-md
                        bg-white/10
                        border
                        border-white/20
                        shadow-lg
                        z-50 p-4"
                    >

                        <button
                            onClick={() =>
                                setShowFilters(false)
                            }
                            className=" mb-4 p-2 rounded"
                        >
                            <X/>
                        </button>
                        {/* sending the highest price to update filter */}
                        <FilterSidebar highestPrice = {highestPrice}/>
                    </div>
                )
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center p-2 ">
                {loading?(
                    <p className="p-6">Loading Products...</p>
                ):(
                    filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div className="w-74 border-2 rounded-lg p-2">
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