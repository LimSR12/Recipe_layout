import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        {/* <h3 className='text-orange-500 text-2xl text-center'>
            앱을 다운로드 받으면 첫 주 레시피가 
            <span className='font-bold ms-3'>무료!</span>
        </h3> */}
        <div className='max-w-[1240px] mx-auto flex flex-col-2'>
            <img src="images/main01.jpg" alt="#" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    매일 다른 레시피 요리 제공
                </h1>
                <p className='mt-2 py-2'>
                    인도하겠다는 인간의 우리 그들의 얼음과 것이다. 
                    끓는 같은 수 없는 봄바람이다. 
                    얼음이 꽃이 설레는 같지 보이는 미묘한 피는 별과 두기 것이다. 
                </p>
                <p className='py-2'>
                    청춘이 예가 뜨거운지라, 주는 이것은 창공에 열락의 아름다우냐? 
                    얼음과 품고 거선의 불러 얼마나 듣는다. 
                    우리의 위하여서, 반짝이는 남는 커다란 이상, 얼마나 이것을 힘있다. 
                    찬미를 있는 모래뿐일 때문이다. 
                    실로 가치를 얼마나 반짝이는 놀이 용기가 이것이다. 
                    능히 꽃이 이상을 인간의 군영과 물방아 그들에게 사랑의 운다.
                </p>
                <p className='text-[brown] font-bold'>Download App for Free!!</p>
                <button className='bg-black text-[white] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-3'>
                    Download
                </button>
            </div>
        </div>
    </div>
  )
}

export default Delivery