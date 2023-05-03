import Link from "next/link"
export default function Inscrientre() {
    return (
        <div className="">
            <div>
                < div className=" bg-indigo-500 relative h-[85px]  w-[1349px] flex items-center  border-b-1">
                    <div className="pl-32">
                        <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                            <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
                    </div>
                    <div className="absolute flex items-center space-x-14  right-32">
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
            <div className="lg:p-[329px] bg-white border-white border-t lg:pb-[243px] ">
                <div className="flex row-auto   bg-white shadow-2xl pr-4 border   items-center justify-center   rounded absolute top-[100px]  left-[370px]  ">
                    <div className=" p-14 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[250px]  h-[250px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>

                    </div>

                    <div class="w-full max-w-xs p-5">
                        <p className="text-xl text-indigo-500 font-bold font-Lexe p-2"> Login</p>
                        <form class="">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="nom">
                                </label>
                                <input class="shadow appearance-none border rounded w-full hover:border-indigo-700 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nom" type="text" placeholder="Nom de l'entreprise" />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold  mb-2" for="email">
                                </label>
                                <input class="shadow appearance-none border rounded w-full hover:border-indigo-700 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                </label>
                                <input class="shadow appearance-none border hover:border-indigo-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p class="text-bue-500 text-xs italic">Please enter your password.</p>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmpassword">
                                </label>
                                <input class="shadow appearance-none border hover:border-indigo-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="******************" />
                                <p class="text-bue-500 text-xs italic">Confirm your password.</p>
                            </div>

                            <div class="flex items-center space-x-6 justify-between">
                                <button class="  hover:bg-gray-200 text-white hover:text-black border-2 bg-indigo-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Inscrivez-vous!
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-amber-700 hover:text-blue-800" href="/connexion">
                                    Connexion
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
