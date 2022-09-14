import { Link, Outlet,NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="flex justify-center mt-40 ">
            {/* <div className="flex"> */}
            <section  className=" col-2 drop-shadow-lg ">
                <article className="flex justify-center font-bold w-96 italic h-72 text-4xl bg-bgProduct hover:font-extrabold mb-4 mr-4 border rounded-lg hover:drop-shadow-2xl">
                <NavLink to="/products" className=" text-center mt-20" >VareKatalog</NavLink> 
                </article>
                <article  className="flex justify-center w-96 italic h-72 text-4xl bg-bgAddProduct font-bold rounded-lg hover:font-extrabold hover:drop-shadow-2xl">
                <NavLink to="/add" className=" text-center mt-20">Tilføj Vare</NavLink> 
                </article>

            </section>
            <section className="w-96  h-72 col-2 drop-shadow-lg  ">
                 <article className=" flex justify-center w-96 italic h-72 text-4xl bg-bgOrders font-bold mb-4 rounded-lg hover:font-extrabold hover:drop-shadow-2xl">
                <NavLink to="/orders" className=" text-center mt-20">Bestilinger</NavLink> 
                </article>
                <article className=" flex justify-center w-96  h-72 italic text-4xl bg-bgCustomer font-bold rounded-lg hover:font-extrabold hover:drop-shadow-2xl">
                <NavLink to="/customers" className=" text-center mt-20" >Kundebase</NavLink> 
                </article>

            </section>
            {/* </div> */}
        </div>
     );
}
 
export default Home;