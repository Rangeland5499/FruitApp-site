import Dialog from "@reach/dialog";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../Contexts/TokenContext";
import "@reach/dialog/styles.css"

const CustomersDetails = ({ customer, handleGetData, setSelectedCustomers }) => {
  const { token } = useContext(TokenContext);
  const [delDialog, setDelDialog] = useState(false);
  const [detail, setDetail] = useState({ ...customer});

  useEffect(() => {
    setDetail({ ...customer });
  }, [customer]);

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/customers/${detail.id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
      method: "DELETE",
    });
    setSelectedCustomers(undefined);
    handleGetData();
    setDelDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/customers/${detail.id}`, {
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(detail),
    });
    handleGetData();
  };

  const handleChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div >
      <Dialog isOpen={delDialog} onDismiss={() => setDelDialog(false)} className="rounded-md" >
        <p className="font-bold">{`Er du sikker på, at du vil slette ${detail?.name}?`}</p>
        <div className="flex m-auto justify-center space-x-4 pt-14 ">
        <button className="bg-red-500 w-28 h-10 rounded-md font-bold hover:font-extrabold hover:bg-red-600 " onClick={handleDelete}>Bekræft</button>
        <button className="bg-green-500 w-28 h-10 rounded-md font-bold hover:font-extrabold hover:bg-green-600 " onClick={() => setDelDialog(false)}>Annullér</button>
        </div>
      </Dialog>
      <form
        className="border drop-shadow-md flex justify-center flex-col mt-40 w-2/3 ml-10 p-10 bg-white rounded-md"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Name:</label>
          <input name="name" value={detail.name} className="cursor-pointer hover:bg-green-100"/>
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Address:</label>
          <input name="street" value={detail.address.street} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Zip:</label>
          <input name="zip" value={detail.address.zip} className="cursor-pointer hover:bg-green-100"/>
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">City:</label>
          <input name="city" value={detail.address.city} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Email:</label>
          <input name="email" value={detail.address.email} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">phone:</label>
          <input name="phone" value={detail.address.phone} className="cursor-pointer hover:bg-green-100" />
        </div>
        
        
        <div className="flex justify-center m-auto mt-16 space-x-4 pt-14">
          <button
            className="bg-red-500 w-28 h-10 font-bold rounded-md hover:font-extrabold hover:bg-red-600"
            onClick={() => setDelDialog(true)}
          >
            Slet
          </button>
          <button className="bg-green-500 w-28 font-bold rounded-md hover:font-extrabold hover:bg-green-600" type="submit">Rediger</button>
        </div>
      </form>
    </div>
  );
};
export default CustomersDetails;
