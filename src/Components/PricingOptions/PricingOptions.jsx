import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPriceCard from '../DaisyPriceCard/DaisyPriceCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl text-blue-200 m-5'>Get Our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
                {
                    pricingData.map(pricing =>
                        <PricingCard
                            key={pricing.id}
                            pricing={pricing}>
                        </PricingCard>)
                }

                {
                    pricingData.map(pricing => 
                        <DaisyPriceCard key={pricing.id}
                        pricing={pricing}></DaisyPriceCard>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;