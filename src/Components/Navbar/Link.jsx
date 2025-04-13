import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='md:hover:text-white md:hover:border-b-2 hover:font-semibold duration-400 uppercase'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;