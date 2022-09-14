import Dialog from "@reach/dialog";
import { useContext, useState } from "react";
import TokenContext from "../Contexts/TokenContext";

const AddProduct = () => {
  const { token } = useContext(TokenContext);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    type: "",
    origin: "",
    desc: "",
    weight: "",
    amount: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        authorization: "Bearer " + token,
        "content-type": "application/json",
      },
    });
    setShow(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="border drop-shadow-md m-16 p-8 max-w-[600px] rounded-md border-green-600">
        <div className="w-100 h-200">
        <Dialog isOpen={show} onDismiss={() => setShow(false)} className="rounded-md">
        <p className="flex justify-center m-auto font-bold ">
        Produktet er tilføjet.
        </p> 
        <div className="flex justify-center m-auto mt-10">
        <button className="bg-green-500 w-28 h-10 rounded-md font-bold hover:font-extrabold hover:bg-green-600 " onClick={() => setShow(false)}>Ok</button>

        </div>
        </Dialog>
        </div>
    
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="flex flex-col"
      >
        <div className="flex justify-between w-full m-4">
          <label>Name</label>
          <input name="name" className="border rounded p-2    focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-between w-full m-4">
          <label>type</label>
          <input name="type" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600 " />
        </div>

        <div className="flex justify-between w-full m-4">
          <label>origin</label>
          <input name="origin" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-between w-full m-4">
          <label>desc</label>
          <input name="desc" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-between w-full m-4">
          <label>weight</label>
          <input name="weight" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-between w-full m-4">
          <label>amount</label>
          <input name="amount" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-between w-full m-4">
          <label>price</label>
          <input name="price" className="border rounded p-2 focus:outline-none focus:border-green-600  focus:ring-green-600" />
        </div>
        <div className="flex justify-center m-auto mt-10">
        <button type="submit" className="bg-green-500 w-28 h-10 rounded-md font-bold hover:font-extrabold hover:bg-green-600 ">Tilføj vare</button>

        </div>
      </form>
    </div>
  );
};

export default AddProduct;
