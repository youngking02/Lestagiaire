import Link from 'next/link';
import { useState } from 'react';
export default function Entreprise() {
    const [showMessage, setShowMessage] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showDeconnexion, setShowDeconnexion] = useState(false);
    

    return (


        <div className=" bg-indigo-500 relative h-[85px] flex items-center  border-b-1">
            <div className="pl-32">
                <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                    <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
            </div>
            <div className="absolute flex items-center space-x-8  right-32">
                <Link href="/accueil" className="flex space-x-2">

                    <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-[20px] h-[20px] mt-[5px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p className="text-white   text-xl ">Accueil</p>
                    </button >

                </Link>
                <div className="flex relative items-center  z-10">
                    <p className="text-white  text-xl "> </p>
                    <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl " onMouseEnter={() => setShowContent(true)}
                        onMouseLeave={()=> setShowContent(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                        <p className="text-white   text-xl ">Profil</p>
                        {showContent && (
                            <div className="absolute top-full shadow rounded-lg space-y-2  left-0 bg-gray-500  p-2">
                                <div >
                                    <div className="hover:bg-indigo-500 text-black text-xs font-bold hover:text-white " onClick={() => setShowDeconnexion(true)}>Deconnexion</div>
                                </div>
                                <div>
                                    <p className="hover:bg-Mathias text-black text-xs font-bold hover:text-white">Supprimer post</p>
                                </div>
                                <div>
                                    <Link href="/motdepasse" >
                                        <p className="hover:bg-Mathias text-black text-xs font-bold  hover:text-white">Changer de mot de passe</p>
                                    </Link >
                                </div>
                            </div>
                        )}

                    </button>
                    {showDeconnexion && (
                        <div className=" shadow-2xl border bg-white border-indigo-700 absolute -bottom-[300px]  w-[450px] h-[150px] p-4 rounded mt-4">

                            <p className='text-black font-semibold text-center text-xl absolute bottom-[80px] '>Cette action procédera à vôtre déconnexion.</p>
                            <div class="flex justify-center absolute  bottom-[14px]  space-x-4 left-[150px]">
                                <Link href="/accueil" >

                                    <button class=" rounded-lg   bg-Bluefonce text-white  appearance-none border w-[70px] h-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-semibold " >Okay </button>
                                </Link>

                                <button onClick={() => setShowDeconnexion(false)} class="shadow rounded-lg  bg-Bluefonce text-white   w-[75px] h-[40px]  appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >Annuler </button>

                            </div>
                        </div>
                    )}
                </div>


                <div className="container z-10  relative ">
                    <div class=" " >
                        <button className="text-white space-x-2 flex   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center text-xl" onClick={() => setShowMessage(true)} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                            <p className="text-white   text-xl ">Message</p>
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

                <Link href="" >

                    <div className=" ">
                        <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">Déposer une offre</button>
                    </div>
                </Link >
            </div>

        </div >

    )
}