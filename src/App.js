
import './App.css';
import Header from './pages/Header.js';
import SideBar from './pages/SideBar.js';
function App() {
  return (
    <>
      
      <div className = "bg-hero-pattern w-100vh h-screen">
        <Header/>
        <div className ="absolute right-20 top-20 h-full  sm:hidden">
          <SideBar />
        </div>
        <div className = "mt-20 pl-40 text-white ">
          <div className = "flex flex-col text-70 sm:text-110 italic font-bold">
            <span className = " sm:-mb-60">Random</span>
            <span className = "sm:-mb-60">NFT</span>
            <span>Name</span>
          </div>
          <span className = "text-24 italic">This is a random pages</span>
          <div className = "border-none bg-lime-400 rounded-10 italic text-white p-10 w-200 sm:w-300 flex justify-center">
                <span>Buy Now</span>
          </div>
        </div>
      </div>
      <div className = "bg-green-splash w-100vh h-screen bg-no-repeat bg-left-bottom pt-200">
        <div  className="flex flex-col items-center break-all px-20">
          <span className = "text-50 italic font-bold sm:w-2/3 w-full">UNIQUE DIGITAL COLLECTABELS</span>
          <span className = "text-20 sm:w-1/3 w-full ">Lorem ipsum dolor sit amet, consectetur adipisving elit. Platea diam morbi non egestas placeat elit. Mauris sociis dignissim bibendum vivamus. Viverra ac dolor amet, id tortor pretium pulvinar ut. Sit accumsan vitae at sit tellus. Fermentum blandit miamet ullamcorper porta lacus lacinia dignissim malesuada. Elit nam orci ornare at rhoncus sit ullamcorper et. Ullamcorper magna</span>
        </div>
      </div>
    </>
  );
}

export default App;
