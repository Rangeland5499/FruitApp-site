import DeleteOrderModal from "./DelteOrderModal";
import { useState } from "react";

const DeleteOrder = ({ orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-red-500 w-32 h-10 font-bold rounded-md hover:font-extrabold hover:bg-red-600"
        onClick={() => setIsOpen(true)}
      >
        Slet bestilling
      </button>
      <DeleteOrderModal
        orders={orders}
        setOrders={setOrders}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default DeleteOrder;
