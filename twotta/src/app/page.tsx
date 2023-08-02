import LeftPane from '@/Components/left-pane'
import MainPane from '@/Components/main-pane'


const Home = () => {
  return (
    <div className= "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftPane/>
        <MainPane/>
      </div>
    </div>
  )
}

export default Home