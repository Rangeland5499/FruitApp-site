import { useState } from "react";
import DeleteOrderItemModal from "./DeleteOrderItemModal";

const DeleteOrderItem = ({ productId, orderId, orders, setOrders }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-red-500 w-28 h-8 font-bold rounded-md hover:font-extrabold hover:bg-red-600"
        onClick={() => setIsOpen(true)}
      >
        Slet vare
      </button>
      <DeleteOrderItemModal
        productId={productId}
        orderId={orderId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        orders={orders}
        setOrders={setOrders}
      />
    </>
  );
};

export default DeleteOrderItem;
