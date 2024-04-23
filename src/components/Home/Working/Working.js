import React from "react";
import signup from "../../../assets/signup.png";
import buy from "../../../assets/buy.png";
import sellphones from "../../../assets/sell phones.png";
import details from "../../../assets/details.png";

const Working = () => {
  // className="flex items-center justify-center lg:col-span-1 col-span-full"
  const imgDiv = {
    display: "flex" /* Equivalent to flex */,
    alignItems: "center" /* Equivalent to items-center */,
    justifyContent: "center" /* Equivalent to justify-center */,
    gridColumn: "1 / span 12" /* Equivalent to col-span-full */,
    "@media (minWidth: 768px)": {
      /* Equivalent to lg:col-span-1 */ gridColumn: "auto / span 1",
    },
  };

  // className="text-xs tracking-wider uppercase dark:text-violet-400"
  const stepStyle = {
    fontSize: "0.75rem" /* Equivalent to text-xs */,
    letterSpacing: "0.05em" /* Equivalent to tracking-wider */,
    textTransform: "uppercase" /* Equivalent to uppercase */,
    color: "black" /* Equivalent to dark:text-violet-400 */,
  };

  // className="text-xl font-bold md:text-2xl"
  const headStyle = {
    fontSize: "1.25rem" /* Equivalent to text-xl */,
    fontWeight: "700" /* Equivalent to font-bold */,
    "@media (minWidth: 768px)": {
      /* Equivalent to md:text-2xl */ fontSize: "1.5rem",
    },
  };

  // className="mt-4 dark:text-gray-300 text-left"
  const bodyStyle = {
    marginTop: "1rem",
    color: "black",
  };
  

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 pb-10">
      <div className="container mx-auto flex flex-col p-2 md:p-6">
        <p className="p-2 text-xl font-medium text-center ">How it Works</p>
        <h2 className="pb-4 text-3xl font-bold text-center text-blue-500">
          4 Simple steps to Sell and Buy your phones
        </h2>
        <div className="divide-y divide-gray-700">
          <div className="grid justify-center grid-cols-2 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
            <div style={imgDiv}>
              <img src={signup} className="w-32" alt="" />
            </div>
            {/* 2nd div  */}
            <div className="flex flex-col justify-center col-span-full lg:col-span-3 lg:text-left">
              <span style={stepStyle}>Step - 1</span>
              <span style={headStyle}>Create an account or login</span>
              <span style={bodyStyle} >
                Please first create an account and must be choose seller or
                buyer account. Google signup means buyers account. After click
                the dashboard sellers can see two route add product and my
                products. Buyers can see the my orders route. If Sellers add a
                product then he/she can see the products in my order route.
                Here, Sellers easily update and delete any order. Only buyers
                can see the booked products in my orders route and payment
                easily.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-2 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
            <div style={imgDiv}>
              <img src={sellphones} className="w-32" alt="" />
            </div>
            {/* 2nd div  */}
            <div className="flex flex-col justify-center col-span-full lg:col-span-3 lg:text-left">
              <span style={stepStyle}>Step - 2</span>
              <span style={headStyle}>Resale phones</span>
              <span style={bodyStyle}>
                Only sellers account sell brand phones. Click the dashboard
                sellers can see two route add product and my products. Click the
                add product route See a form and fill up the form of sell phone
                details. Click the add product button. Automatically going the
                my products route and see your products status(sold/unsold) and
                you can easily update and delete your product. Most benefits you
                can advertise your product nobody can see without login.
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-2 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
            <div style={imgDiv}>
              <img src={buy} className="w-32" alt="" />
            </div>
            {/* 2nd div  */}
            <div className="flex flex-col justify-center col-span-full lg:col-span-3 lg:text-left">
              <span style={stepStyle}>Step - 3 </span>
              <span style={headStyle}>Buy phones or booked</span>
              <span style={bodyStyle}>
                Only buyers can booked products. After click the book now button
                open and modal form and fill up this all field and submit the
                form. Their all booked products can see easily my orders route
                of dashboard. Here, he payment her products with stripe.{" "}
              </span>
            </div>
          </div>
          <div className="grid justify-center grid-cols-2 md:p-8 p-4 mx-auto space-y-8 lg:space-y-0">
            <div style={imgDiv}>
              <img src={details} className="w-32" alt="" />
            </div>
            {/* 2nd div  */}
            <div className="flex flex-col justify-center col-span-full lg:col-span-3 lg:text-left">
              <span style={stepStyle}>Step - 4 </span>
              <span style={headStyle}>See All information</span>
              <span style={bodyStyle}>
                Only admin see the all users(sellers and buyers) information.
                Admin can delete any sellers or buyers account. Users all
                information secure and safety.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
