import React from 'react'
import {BiSearch} from 'react-icons/Bi'

const RightPane = () => {
  return (
    <section className='sticky top-2 overflow-y-scroll mt-2 border-3 flex flex-col items-stretch h-screen px-6'>
          <div>
            <div className='relative w-full h-full group'>
            <input 
              id='searchBox'
              type='text' 
              placeholder='Search Twot' 
              className='outline-none peer focus:border-primary focus:border bg-neutral-700/90 w-full h-full rounded-xl py-4 pl-14 pr-4'
            />
            <label 
              htmlFor='searchBox' 
              className='absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-400 peer-focus:text-primary'
            >
                <BiSearch className='w-5 h-5'/>
            </label>       
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-700/90 my-4'>
            <h3 className='font-bold text-xl px-4 my-4'> What’s the Twot?</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                key={i} 
                className='hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200'
                >
                  <div className='font-bold text-large'>#trending ${i+1}</div>
                  <div className='text-xs text-neutral-400'>35.8k</div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-700/90 my-4'>
            <h3 className='font-bold text-xl px-4 my-4'> Who to heed?</h3>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                key={i} 
                className='hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200'
                >
                  <div className='fleex items-centers space-x-2'>
                    <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                    <div className='flex flex-col space-y-2'>
                      <div className='font-bold text-white '>Other User</div>
                      <div className='text-gray-500 text-xs p-1'>@otheruser1111</div>
                    </div>
                    <div>
                      <button className='rounded-full px-6 py-2 bg-white text-neutral-950'>
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </section>
  )
}

export default RightPane