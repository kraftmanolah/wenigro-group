const Navbar = () => {
    return ( 
        <nav className="p-5 shadow md:flex md:items-center md-justify-between bg-gray-100 container mx-auto px-4">
           <div className="flex items-center cursor-pointer ms-10 ps-10">
                <img src="/img/logo1.png" alt="Description of the image" />
            </div>           
            <ul className="ms-auto md:flex md:items-center ">
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className=" hover:text-green-400 px-3 py-2 duration-500">Home</a>   
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className=" hover:text-green-400 px-3 py-2 duration-500">About Wenigro</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className=" hover:text-green-400 px-3 py-2 duration-500">Products</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className=" hover:text-green-400 px-3 py-2 duration-500">Contact Us</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className=" hover:text-green-400 px-3 py-2 duration-500">FAQ</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <button className="px-3 py-2 me-2 hover:text-green-400 rounded-full border-2 border-black duration-500">Wenigro FARMS</button>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <button className="px-3 py-2 me-3 hover:text-green-400 rounded-full border-2 border-black duration-500">Wenigro POWERS</button>
                </li>
            </ul>
 
        </nav>

        
     );
}
 
export default Navbar;