/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Childcomponent from "./Childcomponent"



const Parentcomponent = () => {
  // car one details
  const carName1 = "Toyota Corolla"
  const carPrice1 = "PK 80.6- 100.8 Lacs"
  const carReviews1 = "⭐⭐⭐⭐⭐"
  const carImage1 = <img src="/toyota-corolla-front-angle-low-view.avif" alt="sorry" />

  // car two details
  const carName2 = "Land Curusier"
  const carPrice2 = "PK 100.5-300.8 Lacs"
  const carReviews2 = "⭐⭐⭐⭐⭐"
  const carImage2 = <img src="/land cruiser.jpeg" alt="sorry" />

  // car three details
  const carName3 = "Honda civics"
  const carPrice3 = "PK  1.40 Cr"
  const carReviews3 = "⭐⭐⭐⭐⭐"
  const carImage3 = <img src="/honda civic.jpg" alt="sorry" />


  // car four details

  const carName4 = "Mahindra Thar"
  const carPrice4 = "PK  5.40 Cr"
  const carReviews4 = "⭐⭐⭐⭐⭐"
  const carImage4 = <img src="/mahindra.jpg" alt="sorry" />


  // car five details
  const carName = "Toyota Hilux Revo "
  const carPrice5 = "PK  3.40 Cr"
  const carReviews5 = "⭐⭐⭐⭐⭐"
  const carImage5 = <img src="/Toyota_Hilux_Revo_GR-S_2023_.png" alt="sorry" />





  return (
    <><div>
      <h1 className="flex justify-center uppercase font-semibold text-4xl">
        featured new car with props component
      </h1>
    </div><div className='flex bg-slate-300 w-full  '>

        <Childcomponent
          Name={carName1}
          price={carPrice1}
          Reveiws={carReviews1}
          image={carImage1} />
        <Childcomponent
          Name={carName2}
          price={carPrice2}
          Reveiws={carReviews2}
          image={carImage2} />


        <Childcomponent
          Name={carName3}
          price={carPrice3}
          Reveiws={carReviews3}
          image={carImage3} />


<Childcomponent
          Name={carName4}
          price={carPrice4}
          Reveiws={carReviews4}
          image={carImage4} />


<Childcomponent
          Name={carName}
          price={carPrice5}
          Reveiws={carReviews5}
          image={carImage5} />

      </div></>
  )
}
export default Parentcomponent