import React from "react";
import "./ContactUs.css";
import { IoIosCall } from "react-icons/io";


export const ContactUs = () => {
  return (
    <>
      <div className="mainContactUsForm">
        <div className="leftContactUsForm">
                        <div className="formName">
                            <p style={{color:"#0A0B5F"}}>Name </p>
                            <input type="text" />
                        </div>

                        <div className="emailAndNumber">
                            <div className="formEmail">
                            <p style={{color:"#0A0B5F"}}>Email</p>
                            <input type="text" />
                            </div>
                            <div className="formEmail">
                            <p style={{color:"#0A0B5F"}}>Number</p>
                            <input type="text" />
                            </div>
                        </div>

                        <div className="formMessage">
                            <p style={{color:"#0A0B5F"}}>Message</p>
                            <textarea type="text"/>
                        </div>

                        <div className="msgBtn">
                            <button className="mainMsgBtn">SUBMIT</button>
                        </div>
                    </div>


        <div className="rightContactUsForm">
            <div className="contactUsText">
                 <h1 style={{color:"#0A0B5F"}}>Contact</h1>
                 <h1 style={{color:"#A00015"}}>Us</h1>
            </div>

            <div className="contactUsTextSec">
                <p>For questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
            </div>

            <div className="contactDetails">
                <div className="contactPhone">
                    <IoIosCall/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
