import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({title, value, color, link}) => {
    // color
    console.log(color)
    const col = ['#24478F']
    return (
        <NavLink to = {`/admin/${link}`}
        style={{
            background: color
        }}
        className={` h-[180px] p-6 rounded-lg`}>
            <p className='font-bold md:text-2xl text-white uppercase'>{title}</p>
            <p className='font-bold md:text-3xl text-white'>{value}</p>
        </NavLink>
    );
};

export default Card;