import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";

const OrderingCustomerMap = ({ customerId, orderNumber, bestId }) => {
  const [customers, setCustomers] = useState([]);

  const { token } = useContext(TokenContext);

  useEffect(function () {
    fetch("http://localhost:3001/customers", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  console.log("orderedProd", customers);

  const filteredCostumer = customers.filter(
    (customer) => customer.id === customerId
  );

  console.log("filteredCostumer", filteredCostumer);

  return (
    <table>
      <thead className="bg-orange-500 border-t-2 ">
        <tr>
          <th className="table-header">Sendes til kunde:</th>
          <th className="table-header">Kontakt kunde:</th>
        </tr>
      </thead>
      {filteredCostumer.map((item, index) => {
        return (
          <>
            <tr className="odd:bg-white even:bg-yellow-100" key={index}>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">Kunde-id: {item.id}</td>
            </tr>
            <tr className="odd:bg-white even:bg-yellow-100" key={index}>
              <td className="table-cell">{item.address.street}</td>
              <td className="table-cell">E-mail: {item.address.email}</td>
            </tr>
            <tr className="odd:bg-white even:bg-yellow-100" key={index}>
              <td className="table-cell">
                {item.address.zip} {item.address.city}
              </td>
              <td className="table-cell">Tlf: {item.address.phone}</td>
            </tr>
            <tr className="odd:bg-white even:bg-yellow-100" key={index}>
              <td className="table-cell">Kundens ordrenr: {orderNumber}</td>
              <td className="table-cell">Bestillings-id: {bestId}</td>
            </tr>
          </>
        );
      })}
    </table>
  );
};

export default OrderingCustomerMap;
