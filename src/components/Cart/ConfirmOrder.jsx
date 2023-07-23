import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../redux/actions/order";
import toast from "react-hot-toast";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);
  const submitHandler = (e) => {
    e.preventDefault();
    setDisableButton(true);
    dispatch(
      createOrder(
        shippingInfo,
        cartItems,
        paymentMethod,
        subTotal,
        tax,
        shippingCharges,
        total
      )
    );
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableButton(false);
    }
  }, [dispatch, message, error,navigate]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              required
              onChange={() => setPaymentMethod("COD")}
            />
          </div>
          <button disabled={disableButton} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
