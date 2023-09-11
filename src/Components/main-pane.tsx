import React from 'react'
import {LiaCommentAltSolid} from 'react-icons/lia'
import {GoReply} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdInsights} from 'react-icons/md'
import {BsShare} from 'react-icons/bs'


const MainPane = () => {
  return (
    <main className ="sticky top-0 flex w-[60%] h-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-300">
    <h1 className=" p-6 text-xl font-bold backdrop-blur bg-black/10 sticky top-0 ">Home</h1>
    <div className='flex items-stretch space-x-2 py-6 px-6 border-t-[0.5px] border-b-[0.5px] border-gray-300 relative'>
      <div className='w-10 h-10 bg-slate-300 rounded-full flex-none'></div>
      <div className='flex flex-col w-full h-full'>
        <input 
        className='w-full h-full bg-transparent border-b-[0.5px] border-gray-300 p-4 outline-none border-none placeholder:text-2xl placeholder:text-gray-500' 
         type='text' 
        placeholder="How's ya?"/>
        <div className='w-full justify-between items-center flex'>
          <div></div>
          <div className='w-full max-w-[100px]'>
            <button className ="w-full rounded-full m-4 bg-twotcolour px-4 py-2 text-lg font-bold text-center hover:bg-opacity-40 transition duration-100" >
              Twot
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col'>
      {Array.from({ length:5 }).map((_,i)=>(
          <div 
          key={i} 
          className = 'border-t-[0.5px] p-4 flex space-x-4 border-gray-300'
          >
            <div>
              <div className='w-10 h-10 bg-slate-400 rounded-full'/>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center space-x-1'>
                <div className='font-bold'>UserName</div>
                <div className='text-gray-500 text-sm'>@UserName</div>
                <div className='text-gray-500 text-sm'>Time</div>
              </div>
              <div className='text-white text-l'>
                This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot This is the twottatwottatwot 
                </div>
              <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl mt-2'></div>
              <div className='flex items-center justify-start space-x-20 mt- w-full'>
                <div className='rounded-full hover:bg-white/50 transion duration-200 p-2 cursor-pointer'><LiaCommentAltSolid/></div>
                <div className='rounded-full hover:bg-white/50 transion duration-200 p-2 cursor-pointer'><GoReply/></div>
                <div className='rounded-full hover:bg-white/50 transion duration-200 p-2 cursor-pointer'><AiOutlineHeart/></div>
                <div className='rounded-full hover:bg-white/50 transion duration-200 p-2 cursor-pointer'><MdInsights/></div>
                <div className='rounded-full hover:bg-white/50 transion duration-200 p-2 cursor-pointer'><BsShare/></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </main>
  )
}

export default MainPane