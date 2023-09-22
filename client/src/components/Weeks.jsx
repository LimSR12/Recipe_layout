import React from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { weeksLecipe } from '../data/data';
import WeeksCard from '../card/WeeksCard';

const Weeks = () => {
  return (
    <>
      <h1 className='text-orange-500 font-bold text-center py-2 text-2xl'>레시피 보기</h1>
      <div className=' lg:flex-max-w-[1520] m-auto py-2 px-2  mx-40'>
        <Splide
            options={{
                perPage: 3,
                gap: "1.5rem",
                grag: "free",
                arrow: false
            }}>
              
        {
          weeksLecipe.map((item, index) => {
            const price = item.price.toLocaleString();
            return(
              <WeeksCard key={item.id} 
                         img={item.img}  
                         title={item.title} 
                         price={price}/>
            )
          })  
        }
        </Splide>
      </div>
    </>
  )
}

export default Weeks