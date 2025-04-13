import React from 'react';

const DaisyPriceCard = ({ pricing }) => {
    const { name, price, features, popular } = pricing;


    return (
        <div className="card w-auto bg-cyan-300 shadow-sm ">
            <div className="card-body text-cyan-800">
                {
                    popular && <span className="badge badge-xs badge-warning text-xl p-2">Most Popular</span>
                }
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map(feature =>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>

                        )
                    }

                </ul>
            </div>
            <div className="m-3">
                <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
        </div>
    );
};

export default DaisyPriceCard;