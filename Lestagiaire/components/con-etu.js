import Link from "next/link"
export default function Con() {
    return (
        <div className="">
            <div>
                < div className=" bg-Mathias relative h-[150px] lg:h-[85px] w-[1349px] flex items-center  border-b-1">
                    <div className="lg:pl-32">
                        <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                            <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
                    </div>

                    <div className="absolute flex items-center  space-x-14  right-32">
                        <p className="text-white  text-xl ">Déposer une offre </p>
                        
                        <div className="flex hover:shadow-lg  hover:border-white hover:text-white hover:border  hover:brightness-200 rounded-full space-x-2 w-44 justify-center  h-10 items-center">
                        <Link href="/accueil" className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-[20px] h-[20px] mt-[5px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                                <p className="text-white   text-xl ">Accueil</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="  shadow-2xl absolute left-[230px] rounded   w-[900px] lg:bottom-[80px] border ">
                <div className=" flex items-center justify-center">
                    <div className=" p-16" >
                        <svg width="250px" height="250px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z" /></svg>
                    </div>

                    <form class="w-full  max-w-sm">
                        <h1 className="text-xl font-bold pb-6  font-Lexe text-Mathias pl-24">Connexion Etudiant</h1>

                        <div class="flex mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">

                            </label>

                            <input class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                        </div>
                        <div class="md:flex md:items-center mb-6">

                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 " htmlFor="inline-password">

                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Enter your password" />

                        </div>

                        <div class="flex justify-center ">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3">
                                <Link href="/interfaceetu" >
                                    <button class="shadow bg-Mathias hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" >
                                        Connexion
                                    </button>
                                </Link>
                                <a class="inline-block align-baseline pl-6 font-bold text-sm text-amber-600 hover:text-indigo-500" href="/inscription">
                                    Inscrivez vous
                                </a>
                            </div>
                        </div>
                    </form>






                </div>
            </div>
        </div >
    )
}
