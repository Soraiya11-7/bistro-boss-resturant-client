import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' md:w-4/12 mx-auto my-8 text-center'>
            <h3 className='text-yellow-600 mb-2'>--- {subHeading} ---</h3>
            <h2 className='text-3xl uppercase border-y-4 py-4'>{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;