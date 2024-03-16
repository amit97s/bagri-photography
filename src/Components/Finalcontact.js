import React from "react";
import style from "./Finalcontact.css";
import finimg from "../assets/VP010917-3-1024x683.jpg";
const Finalcontact = () => {
  return (
    <div className="Finalcontact">
      <div className="Finalcontact-bgimg">
        <div className=" flex justify-center ">
          <img
            src={finimg}
            className="h-full mx-10 sm:mx-0 sm:h-72 md:h-[30rem] rounded-lg hover:scale-110 duration-150"
          />
        </div>
        <div className="para">
          <p>
            Want to make us a part of your celebration? Fill out the form below
            with your details and we will get back to you as soon as we can. We
            take up very limited weddings per year so please provide as many
            details as you can like – dates, venues, ceremonies, wedding theme,
            and a few lines about your story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Finalcontact;
