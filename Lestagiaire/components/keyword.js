import Link from "next/link"
export default function () {
    return (
        <div> <div className="  shadow-2xl absolute left-[230px] rounded   w-[900px] lg:bottom-[80px] border ">
            <div className=" flex items-center justify-center">
                <div className=" p-16" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[250px] h-[250px] ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                </div>

                <form class="w-full  max-w-sm">
                    <h1 className="text-xl font-bold pb-6  font-Lexe text-Mathias pl-24">Changer mot de passe</h1>

                    <div class="flex mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="inline-password">

                        </label>

                        <input class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="inline-password" type="password" placeholder="Entrer vôtre mot de passe actuel" />
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 " htmlFor="new-password">
                        </label>
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="confirm-password" type="password" placeholder="Entrer le nouveau mot de passe your password" />
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 " htmlFor="confirm-password">
                        </label>
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="confirm-password" type="password" placeholder="Confirmer le nouveau mot de passe your password" />
                    </div>

                    <div class="flex justify-center ">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <Link href="/accueil" >
                                <button class="shadow bg-Mathias hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" >
                                    Okay
                                </button>
                            </Link>
                            <a class="inline-block align-baseline pl-6 font-bold text-sm text-amber-600 hover:text-indigo-500" href="/inscrientre">
                                Annuler
                            </a>
                        </div>
                    </div>
                </form>






            </div>
        </div>
        </div>
    )
}
