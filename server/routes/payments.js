const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

// create order api
router.post("/orders", async (req, res) => {
  console.log("api hitted");
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_lZuM7DyfIXtOof",
      key_secret: "Kg59sIBFjZKuL4R5wHJLf72U",
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!!!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!!!" });
  }
});

// payment verify api
router.post("/verify", async (req, res) => {
  try {
    const { rezorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = rezorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      console.log("payment succesful");
      return res.status(200).json({ message: "Payment verified Successfully" });
    } else {
      console.log("Invalid Signature ");
      return res.status(400).json({ message: "Invalid Signature Sent!!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
});

module.exports = router;
