import { useEffect, useState, useContext } from "react"
import TokenContext from "../Contexts/TokenContext";
import { BsSearch } from "react-icons/bs";
import Details from "../Components/Details";



export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [search, setSearch] = useState("");
    const { token } = useContext(TokenContext);
  
    const handleGetData = async () => {
      let query = "";
      if (search.length > 0) {
        query = `?q=${search}`;
      }
  
      const res = await fetch(`http://localhost:3001/products${query}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const data = await res.json();
      setProducts(data);
    };
  
    useEffect(() => {
      handleGetData();
    }, [search]);
  

	return (
		<div className="grid grid-cols-2 mt-10 ml-10">
            <div >
                <h1 className="text-center font-bold">Products</h1>
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
                 <div className="overflow-scroll h-screen border rounded-md border-green-800">
                  <table className="table-auto min-w-full  ">
                   
                   <thead   className="bg-green-800 border-t-2 ">
                        <tr >
                        <th className="table-header">#</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Type</th>
                        <th className="table-header">Amount</th>
                        <th className="table-header">Price</th>
                        </tr>
                    </thead>
                   
            
                 {/* <div  className=" overflow-y-scroll h-screen  flex"> */}
                 <tbody className="overflow-scroll">
                    {products.map((product, index) => (
                    <tr
                        className="odd:bg-white even:bg-green-50 cursor-pointer hover:bg-bgProduct w-full"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <td className="table-cell">{index + 1}</td>
                        <td className="table-cell">{product.name}</td>
                        <td className="table-cell">{product.type}</td>
                        <td className="table-cell">{product.amount}</td>
                        <td className="table-cell">{product.price}</td>
                    </tr>
                    ))}
                </tbody>
                {/* </div> */}

            </table>
              </div>
            </div>
         {selectedProduct && (
            <Details
            product={selectedProduct}
            handleGetData={handleGetData}
            setSelectedProduct={setSelectedProduct}
            />
            )}
        </div>
	);
}