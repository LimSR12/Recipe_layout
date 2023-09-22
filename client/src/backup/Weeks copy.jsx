import React, {useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { weeksLecipe } from '../data/data';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const Weeks = () => {
  // const [result, setResult] = useState([]);
  // const todays = ['일','월','화','수','목','금','토'];
  // const getCurrentWeek = () => {
    
  //   const getDay = new Date();
  //   const toDay = getDay.getTime();
  //   const result = [];
  //   for(let i = 0; i < 7; i++){
  //     result.push(getDay.setDate(getDay.getDate() + i));
  //   }
  //   return result;
  // }
  // useEffect(()=>{
  //   setResult([...result, ...getCurrentWeek()]);
  // }, []);
  // const wDate = getCurrentWeek();
  const getCurrentWeek = () =>{
    var date = new Date().toLocaleDateString()
    var today = Date.parse(date)
    var result = []
    result.push(date)
    for (var i=0; i<7; i++) {
      today += 86400000;
      result.push(new Date(today).toLocaleDateString());
      let dt = new Date(today);
      dt.getDay();
      console.log();
    }
    return result;
  }
  let weeklyDate = getCurrentWeek();
  
  return (
    <>
      <h1 className='text-orange-500 font-bold text-center py-2'>첫 번째 레시피</h1>
      {/* <p>Category</p>
      <div className='category flex max-w-[700] justify-between'>
        <div className='category-cake'>케이크</div>
        <div className='category-muffin'>머핀</div>
        <div className='category-tart'>타르트</div>
      </div> */}
      <div className=' lg:flex-max-w-[1520] m-auto py-2 px-2'>
        <Splide
            options={{
                perPage: 4,
                gap: "1.5rem",
                grag: "free",
                arrow: false
            }}
        >
        {
          weeksLecipe.map((item, index) => {
            const price = item.price.toLocaleString();
            // const wdt = new Date(wDate[index]);
            // const wdate = wdt.getFullYear() + "." + (wdt.getMonth() + 1) + "." + wdt.getDate() + "(" + todays[wdt.getDay()] + ")";
            return(
              <SplideSlide key={item.id}>
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
                    <img src={item.img} alt={item.title} className='w-full'/>
                    <div className='px-6 py-5'>
                      <p className='px-2 pt-2 py-2 font-bold text-2xl truncate'>
                        {item.title}
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
            )
          })  
        }
        </Splide>
      </div>
    </>
  )
}

export default Weeks