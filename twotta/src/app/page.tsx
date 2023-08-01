import {IoMdHome} from 'react-icons/Io'
import {FaSlackHash} from 'react-icons/Fa'
import {PiBellRingingFill} from 'react-icons/Pi'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {BsBookmark} from 'react-icons/Bs'
import {AiOutlineUser} from 'react-icons/Ai'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
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
    <div className= "w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col">
          {
            NAVIGATION_ITEMS.map((item) =>
            <Link className = 'bg-white/50 flex items-center justify-center' href={'/${item.title.toLowerCase()}'} key={item.title}></Link>)
          }
        </section>
        <div>Home</div>
        <div>Right Section</div>
      </div>
    </div>
  )
}

export default Home