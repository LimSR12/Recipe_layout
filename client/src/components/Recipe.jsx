import React, { useState } from 'react'
//바로 출력하기엔 위험한 값 -> useState 이용하자
import { recipeData } from '../data/data'
import { BsFillHeartFill } from 'react-icons/bs';
// import RecipeCard from '../card/RecipeCard';

const Recipe = () => {
  const [foods, setFoods] = useState(recipeData);
  const categoryFilter = (cat) => {
    setFoods(
      recipeData.filter((item)=>{
        return item.category === cat;
      })
    )
  }

  return (
    <>
      <div >
        <p className='text-center font-bold text-orange-500 text-2xl mt-10 mb-10'>종류별 보기</p>
        <div className=' mx-auto flex lg:flex-row mb:flex-col justify-between w-[650px] mb-8'>
          <div className='font-bold w-[150px] h-[50px] text-center pt-3 text-white
                        bg-orange-400 rounded-lg hover:bg-orange-500 cursor-pointer duration-300'
                        onClick={()=>categoryFilter('cake')}
                        >
            케이크
          </div>
          <div className='font-bold w-[150px] h-[50px] text-center  pt-3 text-white
                        bg-orange-400 rounded-lg hover:bg-orange-500 cursor-pointer duration-300'
                        onClick={()=>categoryFilter('tart')}
                        >
            타르트
          </div>
          <div className='font-bold w-[150px] h-[50px] text-center  pt-3 text-white
                        bg-orange-400 rounded-lg hover:bg-orange-500 cursor-pointer duration-300'
                        onClick={()=>categoryFilter('muffin')}
                        >
            머핀
          </div>
          <div className='font-bold w-[150px] h-[50px] text-center  pt-3 text-white
                        bg-orange-400 rounded-lg hover:bg-orange-500 cursor-pointer duration-300'
                        onClick={()=>setFoods(recipeData)}
                        >
            전체보기
          </div>
        </div>
      </div>
      <div className='grid 
                      md:grid-cols-2 
                      sm:grid-cols-1 
                      lg:grid-cols-4 
                      gap-6 py-4
                      max-w-[1540px]
                      ml-4
                      mr-4
                      mx-auto
                      '>
        {
          foods.map((item) => {
              // const categoryFiltered = [];
              // if(item.category == categoryList){
                
              // }
              return(
                <>
                  <div key={item.id} className='group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden'>
                      <img src={item.img} alt={item.name} className='w-full h-[200px] object-cover 
                                                                    rounded-t-lg cursor-pointer
                                                                    brightness-3
                                                                    hover:brightness-1
                                                                    '/>
                      <a className='bg-white-800 rounded-full border-pink-700 w-50 h-50
                                      flex justify-end items-center
                                      text-pink-700 text-2xl
                                      float-left
                                      absolute
                                      bottom-4
                                      right-3'>
                        <BsFillHeartFill className='cursor-pointer'/>
                      </a>
                      <div className='absolute 
                                    bg-black
                                    text-white
                                      bg-opacity-0
                                      group-hover:bg-opacity-40
                                      py-5 px-5 w-full
                                      left-0 
                                      -top-[100px]
                                      group-hover:top-0
                                      h-[75%]
                                      rounded-t-lg
                                      transition-all
                                      duration-500
                                      flex
                                      flex-col
                                      justify-center
                                      items-center
                                      '>
                        <div className='bg-blue-500
                                        w-[35%]  py-2 rounded-lg
                                        text-white text-center mb-[15px] cursor-pointer opacity-0
                                        group-hover:opacity-100'>
                          상세보기 
                        </div>
                        <div className='bg-gray-500 
                                        w-[35%] py-2 rounded-lg
                                        text-white text-center mt-[15px] cursor-pointer opacity-0
                                        group-hover:opacity-100'>장바구니</div>
                      </div>

                      <div className='cursor-pointer flex pt-2 pb-6 px-2 rounded-b-lg bg-gray-100'>
                        <p className='font-bold font-2xl pt-3 pl-3'>{item.title}</p>
                      </div>
                  </div>
                </>
              )
            }
          )
        }
      </div>
    </>
  )
}

export default Recipe