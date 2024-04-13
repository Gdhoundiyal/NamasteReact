import applelogo from "../../utils/apple.png";
import googlelogo from "../../utils/google.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-Background2 p-3 flex justify-center items-center w-[100vw]">
        <div className="flex   justify-around   w-[90vw]">
          <div className="  text-xl font-black  text-[#3D4046]">
            For better experience,download <br />
            the Swiggy app now
          </div>
          <div className="flex justify-between">
            <img className=" object-contain  h-14" src={googlelogo} />
            <img
              className=" object-contain h-[2.36rem] mt-[9px]"
              src={applelogo}
            />
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-black px-9 py-5">
        <div className="flex justify-evenly ">
          <div>
            <p className="text-white  text-lg font-bold">Compony</p>
            <ul>
              <li className="text-white mt-3">About</li>
              <li className="text-white mt-1">Carrier</li>
              <li className="text-white mt-1">Team </li>
              <li className="text-white mt-1">Swiggy one</li>
              <li className="text-white mt-1">Swiggy instamart</li>
              <li className="text-white mt-1">Swiggy genie</li>
            </ul>
          </div>
          <div className=" ">
            <div className=" mb-6">
              <p className="text-white  text-lg font-bold ">Contact Us</p>
              <ul>
                <li className="text-white mt-3">Help % Support</li>
                <li className="text-white mt-1">Partner with us</li>
                <li className="text-white mt-1">Ride with us </li>
              </ul>
            </div>
            <div>
              <p className="text-white  text-lg font-bold">Legel</p>
              <ul>
                <li className="text-white mt-3">Terms and condition</li>
                <li className="text-white mt-1">Cokkie policy</li>
                <li className="text-white mt-1">Private policy </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-white  text-lg font-bold">We deliver to</p>
            <ul>
              <li className="text-white mt-3">Banglore</li>
              <li className="text-white mt-1">Gurgaon</li>
              <li className="text-white mt-1">Hyderabaad </li>
              <li className="text-white mt-1">Delhi </li>
              <li className="text-white mt-1">Mumbai</li>
              <li className="text-white mt-1">Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
