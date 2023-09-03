import React from 'react'

const ReviewsContainer = () => {
    return (
        <div className='reviews-container'>
            <div className='stars-container'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                {/* <i class="fa-regular fa-star"></i> */}
            </div>
            
            <div className='reviews-count'>
                5.0 <span>(105 reviews)</span>
            </div>
        </div>
    )
}

export default ReviewsContainer
