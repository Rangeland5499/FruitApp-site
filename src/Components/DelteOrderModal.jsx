import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import TokenContext from "../Contexts/TokenContext";
import { useContext, useEffect } from "react";

const DeleteOrderModal = ({
  setIsOpen,
  isOpen,
  orderId,
  orders,
  setOrders,
}) => {
  const { token } = useContext(TokenContext);

  function DeleteHandler() {
    fetch(`http://localhost:3001/orders/${orderId}`, {
      headers: {
        authorization: "Bearer " + token,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .then(alert("Denne ordre er slettet"));
  }

  console.log(orderId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="absolute inset-0 bg-slate-800/50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="mx-auto mt-20 w-[20vw] bg-yellow-200/75 rounded-md p-6 border-spacing-1 border-b-2 border-r-2 border-grey-300"
            role="dialog"
            aria-hidden="true"
            /*variants={container}*/
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            <button
              className="top-2 right-2 text-sm text-black-400 p-2 rounded-full border-spacing-1 border-2 border-grey-300"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <p className="p-5">
              Er du sikker på, at du vil slette hele denne bestilling?
            </p>

            <div className="flex justify-between">
              {" "}
              <button
                className="py-2 px-3 text-sm text-black-400 p-3 rounded-full border-spacing-1 border-2 border-grey-300"
                onClick={() => setIsOpen(false)}
              >
                Annullér
              </button>
              <button
                className="py-2 px-3 text-sm text-black-400 p-3 rounded-full border-spacing-1 border-2 border-grey-300"
                onClick={() => {
                  setIsOpen(false);
                  DeleteHandler();
                }}
              >
                Bekræft
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DeleteOrderModal;
