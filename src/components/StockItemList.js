import React from "react";
import PropTypes from 'prop-types'

function StockItemsList ({ stockItems }) {
    return (
        <div>
            <ul>
                {stockItems && stockItems.map(( { sku, unitPrice }, i) => (
                    <li key={i}>{sku}: {unitPrice} pence</li>
                ))}
            </ul>
        </div>
    );


};
StockItemsList.propTypes = {
    stockItems: PropTypes.array
}

export default StockItemsList;