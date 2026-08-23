import React from 'react'

const SectionHeading = ({firstTitle,secondTitle}) => {
    return (
        <div>
            <h2 className='text-[32px] font-bold md:text-[40px]'>{firstTitle}
                <span className='text-blue-800'>{secondTitle}</span></h2>

        </div>
    )
}

export default SectionHeading
