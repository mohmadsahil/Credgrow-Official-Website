import React from 'react'
import "./CardsFeatures.css"

export const CardsFeatures = () => {
  return (
    <>
        <div className='CardFeaturesMainText'>
            <h1>We provide the best feature’s credit cards</h1>
        </div>

        <div className='mainCardFeatures'>
            <div className='CardFeatures'>
                {CardData.map((data)=>(
                    <div className='CardFeaturesDiv'>
                        <div className='CardFeaturesImgDiv'>
                            <img className='CardFeaturesImg' src={data.img} alt="" srcset="" />
                        </div>
                        <div className='CardFeaturesText'>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

const CardData = [
    {img: "/Images/FastDisbursalImg.png",title : "Fast Disbursal" , description :"Our team helps customers make informed loan decisions.We ensure that your application is processed in the lowest turnout time and you get the fastest disbursal."},
    {img: "/Images/SafeSecureImg.png",title : "Safe & Secure" , description :"Our team helps customers make informed loan decisions.We ensure that your application is processed in the lowest turnout time and you get the fastest disbursal. "},
    {img: "/Images/PersonalisedImg.png",title : "Personalised" , description :"Our team helps customers make informed loan decisions.We ensure that your application is processed in the lowest turnout time and you get the fastest disbursal."},
    {img: "/Images/FastTransactionImg.png",title : "Fast Transaction" , description :"Our team helps customers make informed loan decisions.We ensure that your application is processed in the lowest turnout time and you get the fastest disbursal."},
]
