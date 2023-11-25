import React from "react";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <div className="container py-5 mt-4">
        <h2 className="my-3 text-center">
          {isEmpty ? "Your Cart is Empty" : "Cart"}
        </h2>
        <div className="row justify-content-center">
          <table class="table">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="overflow-hidden d-flex justify-content-center align-items-center">
                        <div className="">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            style={{ width: "4rem" }}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6
                        style={{
                          whiteSpace: "nowrap",
                          width: "14rem",
                          overflow: "hidden",
                          fontWeight:'bold'
                        }}
                      >
                        {item.name}
                      </h6>
                    </td>
                    <td className="fw-bold">
                      <i className="bi bi-currency-rupee" />
                      {item.price}
                    </td>
                    <td className="fw-bold">Quantity ({item.quantity})</td>
                    <button
                      className="ms-2 btn btn-primary m-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="ms-2 btn btn-primary m-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="ms-2 fw-bold btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!isEmpty && (
            <div className="row justify-content-center w-100 position-fixed bottom-0">
              <div className="col py-2 fw-bold">
            Total Price: <i className="bi bi-currency-rupee"/>{cartTotal}
              </div>
              <div className="col p-0" md={4}>
                <button className="m-2 btn btn-danger" onClick={()=>emptyCart()}>Clear Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
