import {IoMdHome} from 'react-icons/Io'
import {FaSlackHash} from 'react-icons/Fa'
import {PiBellRingingFill} from 'react-icons/Pi'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {BsBookmark} from 'react-icons/Bs'
import {AiOutlineUser} from 'react-icons/Ai'
import {GiDinosaurEgg} from 'react-icons/Gi'
import Link from 'next/link'
import LeftPane from '@/Components/left-pane'

const NAVIGATION_ITEMS = [
  {
    title: 'Twotta',
    icon:GiDinosaurEgg
  },
  {
    title:'home',
    icon:IoMdHome
  },
  {
    title:'Explore',
    icon:FaSlackHash
  },
  {
    title:'Notifications',
    icon:PiBellRingingFill
  },
  {
    title:'Messages',
    icon:HiOutlineEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:AiOutlineUser
  }
]

const Home = () => {
  return (
    <div className= "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftPane/>
        <main className ="ml-[275px] flex w-[600px] g-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-300">
          <h1 className=" p-6 px-4 text-xl font-bold">Home</h1>
          <div className='flex items-stretch space-x-2 py-4 px-6 border-t-[0.5px] border-b-[0.5px] border-gray-300 relative'>
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
        </main>
      </div>
    </div>
  )
}

export default Home