import React, { useEffect, useState } from "react";
import StockItemForm from "../components/StockItemForm";
import StockItemList from "../components/StockItemList";
const StockManagement = () => {
    let [stockItems, setStockItems] = useState();
    useEffect(() => {
        
        fetch("http://localhost:8080/stockItems")
        .then(response => response.json())
        .then(setStockItems)
        .catch(console.error);
    })

    return (
        <div>
            <h1>Stock Management Page</h1>
            <StockItemForm />
            <StockItemList stockItems={stockItems} />
        </div>
    
);
}

export default StockManagement;