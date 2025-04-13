import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
    return (
        
        <p className=' flex gap-2 items-center bg-amber-100 text-black m-1 border-none p-1 rounded-2xl'>
            <CircleCheckBig></CircleCheckBig>
            {feature}
        </p>
    );
};

export default PricingFeature;