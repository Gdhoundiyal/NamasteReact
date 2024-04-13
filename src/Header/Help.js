import { useState } from "react";

const Help = () => {
  const [value, setvalue] = useState("none");

  let show = { display: value };
  const OnOffTab = () => {
    console.log("clickeddddd", show.display);
    if (show.display === "none") {
      setvalue("inline");
      console.log("none", show);
    }
    if (show.display === "inline") {
      setvalue("none");
      console.log("inline", show);
    }
  };
  return (
    <div className=" w-[100vw]  bg-formbackground flex justify-center items-center p-10  ">
      <div className=" ">
        <div className="">
          <h1 className="text-white ">Help & Support</h1>
          <p className="text-white ">
            Let's take a step ahead and help you better.
          </p>
        </div>
        <div>
          <div className=" h-100vh  bg-white w-[80vw] flex justify-evenly  p-5">
            <div className="w-[20vw] bg-Borders p-5">
              <ul>
                <li> Partner Onboarding </li>
                <li> Legel </li>
                <li> FAQs </li>
              </ul>
            </div>
            <div className="flex-row justify-between w-[40vw] p-5">
              <h2 className="text-lg">Partner Onboarding</h2>
              <div className="w-full mt-5">
                <div className=" border-[#0A071B]/10 p-3">
                  <button
                    className="question-btn  mb-3 flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-slate-800 focus:outline-none "
                    data-toggle="answer-1"
                    onClick={() => OnOffTab()}>
                    <span>What types of hosting plans do you offer?</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className=" mt-1.5 md:mt-0 flex-shrink-0  transform h-5 w-5 text-[#5B5675]"
                      height="1em"
                      width="1em">
                      <path d="M12 16.414l5.707-5.707-1.414-1.414L12 13.586l-4.293-4.293-1.414 1.414z"></path>
                      {/* <path d="M12 16.414l-5.707-5.707 1.414-1.414L12 13.586l4.293-4.293-1.414-1.414z"></path> */}
                    </svg>
                  </button>
                  <div style={show}>
                    <div className=" text-sm   " id="answer-1">
                      We offer shared hosting, VPS hosting, dedicated server
                      hosting, and cloud hosting plans.
                    </div>
                    <div className=" text-sm mt-2  " id="answer-1">
                      We offer shared hosting, VPS hosting, dedicated server
                      hosting, and cloud hosting plans.
                    </div>
                    <div className=" text-sm   " id="answer-1">
                      We offer shared hosting, VPS hosting, dedicated server
                      hosting, and cloud hosting plans.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
