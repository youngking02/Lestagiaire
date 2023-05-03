import Link from 'next/link';
import { useState } from 'react';

export default function Entreprise() {
    const [showMessage, setShowMessage] = useState(false);
    return (


        <div className=" bg-indigo-500 relative h-[85px] flex items-center  border-b-1">
            <div className="pl-32">
                <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                    <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
            </div>
            <div className="absolute flex items-center space-x-14  right-32">
                <p className="text-white  text-xl "> </p>
                <Link href="/profil" >

                    <div className=" ">
                        <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">Profile</button>
                    </div>
                </Link >

                <div className="container z-10  relative ">
                    <div class=" " >
                        <button className="text-white space-x-2 flex   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center text-xl" onClick={() => setShowMessage(true)} >Messages
                        </button>
                    </div>

                    {showMessage &&
                        <div className=" shadow-2xl border bg-Mathias border-indigo-700 absolute   w-[300px] h-[400px] p-4 rounded mt-4">
                            <button onClick={() => setShowMessage(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  hover:bg-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                            <div class="">
                                <input class="shadow rounded-full absolute left-[0px]  bottom-[4px] appearance-none border hover:border-indigo-700  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Message" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute bottom-[10px] right-[10px] flex items-center w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    }

                </div>
                <Link href="/accueil" className="flex space-x-2">

                    <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-[20px] h-[20px] mt-[5px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p className="text-white   text-xl ">Accueil</p>
                    </button >

                </Link>
            </div>

        </div >

    )
}