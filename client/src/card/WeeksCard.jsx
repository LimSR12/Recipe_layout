import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BsSuitHeart } from 'react-icons/bs';

const WeeksCard = ({key, img, title, price}) => {
  return (
    <>
      <SplideSlide>
        <div className='rounded-3xl 
                    relative 
                    overflow-hidden 
                    bg-gray-100 
                    mb-w-sm 
                    shadow-md
                    hover:shadow-xl
                    mb-10
                    transition-all
                    ease-in-out 
                    cursor-pointer
                    '>
        <img src={img} alt={title} className='w-full'/>
        <div className='px-6 py-5'>
            <p className='px-2 pt-2 py-2 font-bold text-2xl truncate'>
            {title}
            </p>
            <p className='px-2 pb-5 '>{price}원</p>
            <div className='flex justify-between align-middle'>
            <button className='bg-gray-600 
                            hover:bg-gray-900 
                            text-white 
                            font-bold 
                            py-2 px-4 
                            border border-gray-900 
                            rounded'>
                레시피 보기
            </button>
            <button className='bg-gray-600 
                            hover:bg-gray-900 
                            text-white 
                            font-bold 
                            py-2 px-4 
                            border border-gray-900 
                            rounded'>
                장바구니
            </button>
            <a href="#"><BsSuitHeart className='text-2xl text-pink-600 ' style={{"marginTop" : "8px"}}/></a>
            </div>
        </div> 
        </div>
      </SplideSlide>
    </>
  )
}

export default WeeksCard