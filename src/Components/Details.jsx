import Dialog from "@reach/dialog";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../Contexts/TokenContext";
import "@reach/dialog/styles.css"

const Details = ({ product, handleGetData, setSelectedProduct }) => {
  const { token } = useContext(TokenContext);
  const [delDialog, setDelDialog] = useState(false);

  const [detail, setDetail] = useState({ ...product });

  useEffect(() => {
    setDetail({ ...product });
  }, [product]);

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/products/${detail.id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
      method: "DELETE",
    });
    setSelectedProduct(undefined);
    handleGetData();
    setDelDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/products/${detail.id}`, {
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
        className="border drop-shadow-md flex flex-col mt-40 w-2/3 p-10 bg-white ml-10 rounded-md"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <div className="flex justify-between mt-4 drop-shadow-md ">
          <label className="font-bold">Name:</label>
          <input name="name" value={detail.name} className="cursor-pointer hover:bg-green-100"/>
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Price:</label>
          <input name="price" value={detail.price} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Amount:</label>
          <input name="amount" value={detail.amount} className="cursor-pointer hover:bg-green-100"/>
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Type:</label>
          <input name="type" value={detail.type} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Description:</label>
          <input name="desc" value={detail.desc} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Weight:</label>
          <input name="weight" value={detail.weight} className="cursor-pointer hover:bg-green-100" />
        </div>
        <div className="flex justify-between mt-4 drop-shadow-md">
          <label className="font-bold">Origin:</label>
          <input name="origin" value={detail.origin} className="cursor-pointer hover:bg-green-100" />
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
export default Details;
