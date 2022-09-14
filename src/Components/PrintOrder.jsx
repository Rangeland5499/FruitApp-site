import PrintOrderModal from "./PrintOrderModal";
import { useState } from "react";

const PrintOrder = ({ orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <button
        className="bg-green-500 w-32 h-10 mx-4 font-bold rounded-md hover:font-extrabold hover:bg-green-600"
        onClick={() => setIsOpen(true)}
      >
        Print bestilling
      </button>
      <PrintOrderModal
        orders={orders}
        setOrders={setOrders}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default PrintOrder;
