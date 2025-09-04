import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    // Create a reversed copy of the sales array
    const sortedSales = [...sales].reverse();

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold mb-4">Sales Record</h1>
            {sortedSales.length > 0 ? (
                <div className="grid gap-4">
                    {sortedSales.map((sale, index) => (
                        <SaleRecord key={sale.datetime} sale={sale} saleId={sales.length - index} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">No sales recorded yet.</p>
            )}
        </div>
    );
};

export default Sales;