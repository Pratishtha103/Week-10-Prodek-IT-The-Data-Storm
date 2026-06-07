import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) =>{ 
                setProduct(data);
                setLoading(false);
            })
            .catch((e) => console.error(e));
    }, [id]);
    return(
        <div className="flex flex-col gap-10 p-10">
            {loading?(
                <p className="p-6">Loading Product...</p>
            ):(
                <>
                    <img src={product.thumbnail} alt={product.title} className="w-80 h-80 object-cover rounded-lg" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl">{product.title}</h2>
                        <p className="text-gray-400">{product.description}</p>
                        <p className="text-amber-400 text-2xl font-bold">${product.price}</p>
                        <p className="text-green-400">{product.discountPercentage}% OFF</p>
                        <p>{product.rating} &#9733;</p>
                    </div>
                </>
        )}
        </div>
    );
}
export default ProductDetail;