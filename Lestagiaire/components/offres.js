import Link from "next/link"
import { useState } from 'react';

export default function Offres() {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div>
            <div className=" bg-indigo-500 relative h-[85px] flex items-center  border-b-1">
                <div className="pl-32">
                    <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                        <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
                </div>
                <div className="absolute flex items-center space-x-14  right-32">
                    <p className="text-white  text-xl "> </p>
                    <div className=" ">
                        <button className="text-white  space-x-2 flex hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">Profile</button>
                    </div>
                    <div className="container  relative ">
                        <div class=" " >
                            <button className="text-white space-x-2 flex   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center text-xl" onClick={() => setShowMessage(true)} >Messages
                            </button>
                        </div>

                        {showMessage &&
                            <div className="bg-white shadow-2xl border border-indigo-700 absolute  left-[468px] -bottom-[750px] w-[300px] h-[400px] p-4 rounded mt-4">
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
                    <div className=" ">

                        <button className="text-white  flex space-x-2   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center  text-xl ">Postuler</button>
                    </div>
                    <Link href="/Nosoffres" >
                        <div className=" ">
                            <button className="text-white flex space-x-2   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">Nos Offres</button>
                        </div>
                    </Link >

                </div>
            </div>
            <div className="bg-Mathias h-[210px]  border-t border-Emma  relative ">
                <div className="bg-indigo-500 h-[250px]  flex justify-center pt-[50px] border-t">
                    <span className="text-white text-3xl">Bienvenue sur Lestagiaire.<span className="text-yellow-300 text-2xl font-bold">bj</span> chers Etudiant </span>
                </div>
            </div>
            <div className="flex flex-col space-y-2 justify-center bg-white shadow-2xl absolute rounded-xl left-[168px] h-[146px] w-[1030px] top-[210px]  ">
                <div className="flex space-x-6  pl-4 items-center ">
                    <div className="space-y-2">
                        <p>Filière</p>
                        <select className="border bg-Grisnu h-[45px] w-[190px]  rounded-lg">
                            <option  ></option>
                            <option>Génie logiciel</option>
                            <option>Intelligence Artificielle</option>
                            <option>Sécurité Informatique</option>
                            <option>Agronomie</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <p>Niveau d'études</p>
                        <select className="border bg-Grisnu h-[45px] w-[190px]  rounded-lg">
                            <option  ></option>
                            <option>Baccalauréat</option>
                            <option>Licence</option>
                            <option>Master</option>
                            <option>Doctorat</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <p>Ville</p>

                        <select className="border bg-Grisnu h-[45px] w-[190px]  rounded-lg" >
                            <option  ></option>
                            <option >Cotonou</option>
                            <option>Porto-novo</option>
                            <option>Ouidah</option>
                            <option>Parakou</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <p>Type d'expérience</p>
                        <select className="border h-[45px] bg-Grisnu w-[190px] rounded-lg">
                            <option  ></option>
                            <option className="" >Live</option>
                            <option>Physique</option>
                            <option>Sécurité Informatique</option>
                            <option>Agronomie</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">Type d'expérience</p>
                        <Link href="/recherche" >

                            <div class=" flex p bg-indigo-500 items-center justify-center rounded-lg w-[140px] h-[45px] space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-5 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                                <button class="items-center font-medium text-sm text-white "  >Rechercher</button>

                            </div>
                        </Link>
                    </div>

                </div>
                <p className=" text-xs pl-4">*Astuce: Indiquez une ville ou un code postal dans la barre "où" afin d'afficher des résultats localisés.</p>

            </div>
            <div>

                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[453px] w-[1030px] rounded-xl ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <span className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </span>
                        <span className="font-bold text-xl">Administrateur de base de données </span>
                        <div className="scroll-snap-align-start flex space-x-8 ">
                            <span className="text-griis">  <span className="text-gris text-sm">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris text-sm">Entreprise: <span className="text-Blueciel underline">41devs, Gbedjrominde Cotonou</span> </span>
                        </div>
                    </div>


                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[620px] w-[1030px] rounded-xl " >
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div className=" flex space-x-2">
                            <p>Alternance </p>
                            <p>Stage professionnel </p>
                        </div>
                        <p className="font-bold text-xl">Développeur Frontend </p>
                        <div className="scroll-snap-align-start flex space-x-8 ">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">Isocel Bénin, Cotonou</span> </span>
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-8 pl-8 border scroll-snap-align-start absolute h-[143px] left-[168px] top-[787px] w-[1030px] rounded-xl ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />

                    <div className="">

                        <p>Alternance </p>
                        <p className="font-bold text-xl">Développeur Backend </p>
                        <div className="flex space-x-8">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">SBIN Ganhi,Cotonou</span> </span>
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[954px] w-[1030px] rounded-xl  ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />

                    <div className="">

                        <p>Alternance </p>
                        <p className="font-bold text-xl">Analyste de données </p>
                        <div className="flex space-x-8">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">Eya Center</span> </span>
                        </div>
                    </div>

                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[1121px] w-[1030px] rounded-xl  ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div className="flex space-x-2">
                            <p>Alternance </p>
                            <p>Stage professionnel </p>
                        </div>
                        <p className="font-bold text-xl">Administrateur de base de données </p>
                        <div className="flex space-x-8 ">
                            <span className="text-griis">   <span className="text-gris">Formation:</span> Informatique de gestion </span>
                            <p className="text-gris">Entreprise: <span className="text-Blueciel underline">MTN Bénin, Marina Cotonou</span> </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[1288px] w-[1030px] rounded-xl  ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div className="flex space-x-2">
                            <p>Alternance </p>
                            <p>Stage professionnel </p>
                        </div>
                        <p className="font-bold text-xl">Administrateur de base de données </p>
                        <div className="flex space-x-8 ">
                            <span className="text-griis">   <span className="text-gris">Formation:</span> Informatique de gestion </span>
                            <p className="text-gris">Entreprise: <span className="text-Blueciel underline">MTN Bénin, Marina Cotonou</span> </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

