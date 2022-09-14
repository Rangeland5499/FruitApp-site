import { useEffect, useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import { BsSearch } from "react-icons/bs";
import CustomersDetails from "../Components/CustomersDetail";

export default function CustomerBase() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState();
  const [search, setSearch] = useState("");
  const { token } = useContext(TokenContext);

  const handelGetData = async () => {
    let query = "";
    if (search.length > 0) {
      query = `?q${search}`;
    }

    const res = await fetch(`http://localhost:3001/customers${query}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    handelGetData();
  }, [search]);

  return (
    <div className="grid grid-cols-2 mt-10 ml-10">
      <div>
        <h1 className="text-center font-bold">Customers</h1>

        <div>
          <div className="flex items-center rounded-md bg-beige mt-6 pl-2  py-3 border border-green-900  bg-green-50">
            <BsSearch className="text-lg block float-left cursor-pointer ml-4" />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="text-base bg-transparent w-100% text-black focus:outline-none ml-3"
            />
          </div>
        </div>
        <div className="overflow-auto border rounded-md border-green-800">
          <table className="table-auto min-w-full overflow-scroll ">
            <thead className="bg-green-800 border-t-2 ">
              <tr>
                <th className="table-header">#</th>
                <th className="table-header">Name</th>
                <th className="table-header">Email</th>
                <th className="table-header">Phone</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  className="odd:bg-white even:bg-green-50 cursor-pointer hover:bg-bgCustomer hover:font-semibold "
                  onClick={() => setSelectedCustomers(customer)}
                >
                  <td className="table-cell">{index + 1}</td>
                  <td className="table-cell">{customer.name}</td>
                  <td className="table-cell">{customer.address.email}</td>
                  <td className="table-cell">{customer.address.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedCustomers && (
        <CustomersDetails
          customer={selectedCustomers}
          handelGetData={handelGetData}
          setSelectedCustomers={setSelectedCustomers}
        />
      )}
    </div>
  );
}
