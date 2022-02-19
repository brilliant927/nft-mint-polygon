import { useState } from "react";

function SideBar() {
    const [opened, setOpened] = useState(false);
    const OnOpenClick = () => {
        setOpened(!opened);
    }
    return (
        <div className = {(opened ? "w-150" :"w-30") + " h-full text-white"}>
            <div onClick={() => OnOpenClick()} className="mb-20">
                {opened ? <span>X</span>  :  <span>---</span>}
            </div>    
            <div className = {(opened ? "flex" :"hidden") + " flex-col italic space-y-20 items-end"}>
                <span>HOME</span>
                <span>ABOUT</span>
                <span>FAQ</span>
            </div>
            <div className =  {(opened ? "flex " :"hidden") + " w-full justify-end"}>
                <div className =" items-center border-2 border-lime-500 rounded-20 italic text-lime-500 p-5 w-fit mt-20">
                    <span>Connect Wallet</span>
                </div>
            </div>
        </div>
    )

}

export default SideBar;