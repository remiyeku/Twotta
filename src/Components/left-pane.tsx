import {IoMdHome} from 'react-icons/io'
import {FaSlackHash} from 'react-icons/fa'
import {PiBellRingingFill} from 'react-icons/pi'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {BsBookmark} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {GiDinosaurEgg} from 'react-icons/gi'
import Link from 'next/link'

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


import React from 'react'

const LeftPane = () => {
  return (
    <section className="sticky top-0 w-[275px] flex flex-col items-stretch h-screen px-8">
        <div className ="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
                 <Link 
                    className = 'hover:bg-white/30 transition duration-200 flex items-center justify-start w-fit space-x-2 rounded-3xl py-2 px-6' 
                    href={`/${item.title.toLowerCase()}`} 
                    key={item.title}>
                    <div>
                        <item.icon/>
                    </div>
                  {item.title !== "Twotta" && <div>{item.title}
                  </div>
                  }
                </Link>
            ))}
            <button className ="w-full rounded-full m-4 bg-twotcolour p-4 text-2xl text-center hover:bg-opacity-40 transition duration-100" >
                Twot
            </button>
        </div>
        <button className ="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-2xl text-center hover:bg-white/10 transition duration-200">
            <div className="rounded-full bg-slate-400 w-10 h-10">

            </div>
            <div className="text-left">
                <div className="text-xs font-semibold">UserName</div>
                <div className="text-xs">@UserNam</div>
            </div>

        </button>
    </section>
  )
}

export default LeftPane