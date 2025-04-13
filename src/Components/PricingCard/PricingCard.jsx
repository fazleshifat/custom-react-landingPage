import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { id, name, price, description, features } = pricing;

    // console.log(features)

    return (

        <div className='flex flex-col bg-amber-200 border-2  text-black rounded-2xl p-4'>
            {/* card header */}
            <div className=''>
                <h1 className='text-4xl'>{name}</h1>
                <h2 className='text-3xl'>{price}</h2>
            </div>

            {/* card boy */}
            <div className='flex-1 bg-amber-400 text-black p-3 rounded-2xl mt-8'>

                <p>{description}</p>

                <p className='btn w-20 flex mt-10 ml-1'>Features</p>

                {
                    features.map((feature, index) =>

                        <PricingFeature
                            key={index}
                            feature={feature}
                        >
                        </PricingFeature>
                    )
                }

            </div>
            <button className='btn w-full mt-4 rounded-xl'>Subscribe</button>

            

        </div>

        
    );
};

export default PricingCard;