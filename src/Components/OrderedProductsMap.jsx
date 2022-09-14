import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import DeleteOrderItem from "./DeleteOrderItem";

const OrderedProductsMap = ({
  productId,
  amount,
  orderId,
  orders,
  setOrders,
}) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);
  const totalArray = [];

  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/products", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("orderedProd", products);

  const filtered = products.filter((product) => product.id === productId);

  return (
    <>
      <tbody>
        {filtered.map((item, index) => {
          const subTotal = item.price * amount;
          const subTotalObject = { subTotal };
          totalArray.push(subTotal);

          return (
            <tr
              className="bg-orange-50  border-gray-900 border-solid"
              key={index}
            >
              <td className="table-cell">{item.id}</td>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.type}</td>
              <td className="table-cell">{item.price} DKK</td>
              <td className="table-cell">{amount}</td>
              <td className="table-cell">{subTotal} DKK</td>
              <td className="table-cell">
                {" "}
                <DeleteOrderItem
                  productId={productId}
                  orderId={orderId}
                  orders={orders}
                  setOrders={setOrders}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default OrderedProductsMap;
