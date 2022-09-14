import { BsArrowLeftShort} from "react-icons/bs";
import { useState } from "react";
import Logo from "../image/Logo.png";
import { useContext } from "react";
import { Link, Outlet,NavLink } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";
import {
  BsFillPersonLinesFill,
  BsBorderWidth,
  BsBasketFill,
  BsFileLock2Fill,
  BsFillBagPlusFill,
  BsFillHouseDoorFill
} from "react-icons/bs";

export default function Layout() {
  const { setToken } = useContext(TokenContext);
  const [open, setOpen] = useState(true);

  function signout() {
    setToken(null);
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="flex bg-beigeLight overflow-y-hidden h-screen">
		
      <nav
        className={`bg-beige h-screen pt-4 drop-shadow-md ml-8 ${
          open ? "w-72" : "w-35"
        } duration-300 relative`}
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            className={`object-contain h-15 w-15 cursor-pointer block mr-2 px-5 duration-200 ${
              open && "rotate-[360deg]"
            } `}
          />
        </div>
        <BsArrowLeftShort
          className={` bg-beige text-black text-3xl rounded-full hover:drop-shadow-lg cursor-pointer top-4  absolute -right-3 border border-black hover:border-2 " ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <menu className="pt-10 space-y-6 font-bold ">
		
		  <div className={`hover:bg-bgHome hover:font-black py-4 pl-8 hover:drop-shadow-lg hover:${
            open ? "w-72" : "w-30"}`} >
				<li className="flex" >
					<NavLink to="/" style={({isActive})=>{return{color:isActive?"rgba(7, 131, 20, 0.95)":""}}}><BsFillHouseDoorFill size={30}/></NavLink>
					<NavLink to="/"  className={`ml-5 ${open ? "" : "hidden"}`} >Home</NavLink>
				</li>
			</div>

		  <div className={`hover:bg-bgProduct hover:font-black hover:drop-shadow-lg py-4 pl-8 hover:${
            open ? "w-72" : "w-30"
          }`}>
			<li className="flex">
				<NavLink to="/products"  style={({isActive})=>{return{color:isActive?"rgba(154, 217, 21, 0.90)":""}}}>
				<BsBorderWidth className="hover:font-black" size={30} />
				</NavLink>
				<NavLink to="/products" className={`ml-5 ${open ? "" : "hidden"}`}>
				VareKatalog
				</NavLink>
			</li>
		  </div>

		  <div className={`hover:bg-bgAddProduct hover:font-black hover:drop-shadow-lg py-4 pl-8 hover:${
            open ? "w-72" : "w-30"}`}>
			<li className="flex">
				<NavLink to="/add" style={({isActive})=>{return{color:isActive?"rgba(255, 247, 46, 0.80)":""}}}>
				<BsFillBagPlusFill size={30} />
				</NavLink>
				<NavLink to="/add" className={`ml-5 ${open ? "" : "hidden"}`}>
				Tilføj Vare
				</NavLink>
			</li>
		  </div>

		  <div className={`hover:bg-bgOrders hover:drop-shadow-lg hover:font-black py-4 pl-8 hover:${
            open ? "w-72" : "w-30"
          }`}>
			<li className="flex">
				<NavLink to="/orders" style={({isActive})=>{return{color:isActive?"rgba(241, 206, 18, 0.90)":""}}}>
				<BsBasketFill size={30} />
				</NavLink>
				<NavLink to="/orders" className={`ml-5 ${open ? "" : "hidden"}`}>
				Bestilinger
				</NavLink>
			</li>
		  </div>

		  <div className={`hover:bg-bgCustomer hover:drop-shadow-lg hover:font-black py-4 pl-8 hover:${
            open ? "w-72" : "w-30"
          }`} >
		  
			<li className="flex">
				<NavLink to="/customers" style={({isActive})=>{return{color:isActive?"rgba(255, 142, 37, 0.90)":""}}} >
				<BsFillPersonLinesFill size={30} />
				</NavLink>
				<NavLink to="/customers" className={`ml-5 ${open ? "" : "hidden"}`}>
				Kundebase
				</NavLink>
			</li>
		  </div>

		  <div className={`hover:bg-bgSignOut hover:drop-shadow-lg hover:font-black py-4 pl-8 hover:${
            open ? "w-72" : "w-30"
          }`}>
			<li className="flex">
				<button onClick={signout}>
				{" "}
				<BsFileLock2Fill size={30} />
				</button>
				<button
				className={`ml-5 ${open ? "" : "hidden"}`}
				onClick={signout}
				>
				Sign out
				</button>
			</li>
		  </div>
        </menu>
      </nav>

      <main className=" flex-auto  h-screen">
        <Outlet />
      </main>
	  
    </div>
  );
}
