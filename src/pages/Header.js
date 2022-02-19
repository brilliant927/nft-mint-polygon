function Header() {
    return (
        <div className = "w-full px-40 hidden sm:flex justify-between py-20">
            <div>
                <img src="../assets/Logo.svg" alt="LOGO" />
            </div>
            <div className = "space-x-30 italic text-white">
                <span>HOME</span>
                <span>ABOUT</span>
                <span>FAQ</span>
            </div>
            <div className = "border-2 border-lime-500 rounded-20 italic text-lime-500 p-10">
                <span>Connect Wallet</span>
            </div>
        </div>
    )
}

export default  Header;