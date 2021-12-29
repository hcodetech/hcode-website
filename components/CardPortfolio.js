import React from 'react'
import { pollinateMockup } from '../constants/constants'

const CardPortfolio = (props) => {
    const { selectedCategory, cardData } = props

    if(selectedCategory.some((category => cardData.tags.includes(category))) || !selectedCategory.length){
        return (
            <div className={` ${cardData.additionalClass} grid grid-cols-12 rounded mb-10`}>
                <div className='col-span-6 p-10 '>
                    <img src={cardData.logo} alt={cardData.name}/>
                    <h1 className='text-4xl mt-2 font-semibold mb-3 bg-green-500'>
                        {cardData.name}
                    </h1>
                    <p>
                        {cardData.bio}
                    </p>
                </div>
                <div className='col-span-6 ml-auto'>
                    <img src={cardData.mockupImage} alt={cardData.name} />
                </div>
            </div>
        )
    }   
   return null
}

export default CardPortfolio
