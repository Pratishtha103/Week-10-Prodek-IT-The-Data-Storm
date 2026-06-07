import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import {
    setCategory,
    setMaxPrice, 
    resetFilters
} from "../features/filters/filterSlice";

export default function FilterSidebar(){
    const filters = useSelector(
        state => state.filters
    );
    const dispatch = useDispatch();
    const handleReset = useCallback(() => {
        dispatch(resetFilters());
    }, [dispatch]);

    return(
        <div className="p-4 rounded-lg flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <p>Category: </p>
                <select
                    value={filters.category}
                    onChange={(e) =>
                        dispatch(setCategory(e.target.value))
                    }
                    className="text-[#777]"
                >
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
            <div className="flex flex-col gap-3">
                    <p>Max Price: ${filters.maxPrice}</p>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={filters.maxPrice}
                        onChange={(e) =>
                            dispatch(setMaxPrice(Number(e.target.value)))
                        }
                        className="w-full cursor-pointer"
                    />
                <div className="flex justify-between">
                    <span>$0</span>
                    <span>$10000</span>
                </div>
                <button
                onClick={()=>
                    {handleReset()}
                } 
                className="bg-none border-2 rounded-lg cursor-pointer">Reset</button>
            </div>
        </div>
    );
}