import { useDispatch, useSelector } from "react-redux";
import { img_url } from "../../utils/constants";
import { Link } from "react-router-dom";
import {
  removeItem,
  increaseItem,
  decreaseItem,
  totalPrize,
} from "../features/cartSlice";
import axios from "axios";
import { useState } from "react";
import { title } from "process";

const Cart = () => {
  const items = useSelector((state) => state.items);
  const totalprice = useSelector((state) => state.totalPrice);
  const [product, setproduct] = useState({
    name: "pizza",
    price: 300,
  });

  const dispatch = useDispatch();
  console.log("items", items.length);

  const deleteitem = (item) => {
    // console.log("item", item);
    dispatch(removeItem(item.id));
    dispatch(totalPrize());
  };
  const itemCount = useSelector((state) => state.count);
  console.log("itemCount", itemCount);

  const Increasevalue = (item) => {
    dispatch(increaseItem(item));
    dispatch(totalPrize());
  };
  const decreasevalue = (item) => {
    dispatch(decreaseItem(item));
    dispatch(totalPrize());
  };

  // const history = useHistory();
  const home = () => {
    console.log("click");
    <Navigate to={"/"} />;
  };

  const initpayment = ({ data: data }) => {
    const options = {
      key: "rzp_test_lZuM7DyfIXtOof",
      amount: totalprice,
      currency: data.currency,
      order_id: data.id,
      description: "Test Payment",
      handler: async () => {
        try {
          const verifyUrl = "http://localhost:8080/api/payment/verify";
          const data = axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
          screenTop;
        }
      },
      theme: {
        color: "#878585",
        title: "Namste React",
      },
    };
    const rzrpay = new window.Razorpay(options);
    rzrpay.open();
    // console.log(rzrpay);
  };

  const displayRazorpay = async () => {
    console.log("clicked");
    try {
      const orderUrl = "http://localhost:8080/api/payment/orders";
      const data = axios
        .post(orderUrl, { amount: totalprice + 50 })
        .then(function (response) {
          console.log(response.data);
          initpayment(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      // let newdata = await data;
      // console.log("newdata", newdata).data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-Background1 p-2">
      {items.length !== 0 ? (
        <div className="flex  mt-5 -center justify-center">
          <div className=" h-auto w-[46rem] flex items-center justify-center bg-Background2  ">
            <div className="  p-3">
              <div className=" text-center font-sans font-bold text-lg mt-2">
                {" "}
                Delivery Details
              </div>
              {items.map((item) => {
                return (
                  <div className="flex justify-evenly ">
                    <div className=" h-auto  mt-1   p-5 flex items-center justify-center ">
                      <div className="h-auto   w-[36rem]  mt-1   p-3  flex items-center justify-between ">
                        <div>
                          {/* <div>{item.id}</div> */}
                          <p className="text-[17px]  w-[18rem]">{item.Name}</p>
                          <div className="flex items-center justify-between mt-3 ">
                            <p>Rs.{item.price}</p>
                            <div className="flex items-center gap-3">
                              <p
                                className="px-1 rounded-md border border-Borders text-black text-sm"
                                onClick={() => Increasevalue(item)}>
                                +
                              </p>
                              <p className="px-1 rounded-mdtext-m">
                                {item.quantity}
                              </p>
                              <p
                                className="px-1 rounded-md border border-Borders text-black text-sm"
                                onClick={() => decreasevalue(item)}>
                                {" "}
                                -
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="h-28 w-28 overflow-hidden rounded-xl  p-2">
                          <img
                            className="h-full w-full object-cover rounded-xl"
                            src={img_url + item.imageId}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="p-2   rounded-lg text-white bg-Primary"
                        onClick={() => deleteitem(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="h-auto w-auto bg-white mt-1 p-3">
                <div className=" w-auto ">
                  <p className="p-2 font-bold">Billing Details....</p>

                  <div className="flex justify-between p-2">
                    <div>Total Price</div>
                    <div> Rs.{totalprice}</div>
                  </div>
                  <div className="flex justify-between w-auto p-2">
                    <div>GST and Restaurent Charges..</div>
                    <div>Rs. 50</div>
                  </div>
                  <div className="flex justify-between p-2 border-t mt-2">
                    <div className="font-bold"> Grand Total </div>
                    <div className="font-bold"> Rs.{totalprice + 50}</div>
                  </div>
                  <div className="flex  justify-center items-center mt-5 rounded-lg">
                    <button
                      onClick={() => displayRazorpay()}
                      className=" px-4 py-2 border border-Background2 rounded-lg bg-Primary text-white">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full mt-5 items-center  bg-Background2 justify-center p=3">
          <div className="  h-80  w-[46rem] flex items-center justify-center bg-1  ">
            <div className=" h-56 flex items-center">
              <div className=" h-40 w-[36rem]  bg-white  text-center rounded-lg ">
                <div className="mt-5  text-xl text-Heading">
                  Your Cart is Empty
                </div>
                <div className="mt-2  text-m text-Heading">
                  You can go to home page to view more restaurants
                </div>
                <Link to={"/"}>
                  <button className="p-3 bg-Primary text-white rounded-lg mt-3">
                    Explore Restaurents
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
