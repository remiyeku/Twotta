import LeftPane from '../Components/left-pane'
import MainPane from '../Components/main-pane'
import RightPane from '../Components/right-pane'


const Home = () => {
  return (
    <div className= "w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[80vw] w-full h-full flex relative">
        <LeftPane/>
        <MainPane/>
        <RightPane/>
      </div>
    </div>
  )
}

export default Home