import Link from "next/link"
import { PhotographIcon } from "@heroicons/react/outline"
import { useState } from 'react'

export default function Admin() {
    const [showContent, setShowContent] = useState(false)

    return (

        <div className="">
            <div className=" bg-indigo-500 relative h-[85px] flex items-center  border-b-1">
                <div className="pl-32">
                    <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                        <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
                </div>
                <div className="absolute flex items-center space-x-14 z-10  right-32">
                    <p className="text-white  text-xl "> </p>
                    <div className="relative ">
                        <button className="text-white  space-x-2 flex   hover:brightness-200 rounded-full w-44  h-10  justify-center items-center text-xl " onMouseEnter={() =>
                            setShowContent(true)
                        } onMouseLeave={() =>
                            setShowContent(false)
                        }>
                            Profile
                            {showContent && (
                                <div className="absolute top-full shadow rounded-lg space-y-2  left-0 bg-gris  p-2">
                                    <Link href="/accueil" >
                                        <p className="hover:bg-Mathias text-black text-xs font-bold hover:text-white">Deconnexion</p>
                                        </Link>

                                        <p className="hover:bg-Mathias text-black text-xs font-bold hover:text-white">Supprimer post</p>
                                        <p className="hover:bg-Mathias text-black text-xs font-bold  hover:text-white">Changer de mot de passe</p>
                                </div>
                            )}

                        </button>
                    </div>


                    <Link href="/validationoffre" >

                        <div className=" ">
                            <button className="text-white flex space-x-2   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">voir offres</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bg-Mathias h-[210px]  border-t border-Emma  relative ">
                <p className="font-normal absolute left-[183px] top-[45px] text-[32px] text-blanc">Bienvenue chers Administrateur sur notre platforme</p>
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
                        <p>Nom de l'entreprise</p>
                        <textarea className="w-[190px] h-[45px] bg-Grisnu rounded-lg" ></textarea>
                    </div>
                    <div className="space-y-2">
                        <p>Lieu</p>
                        <textarea className="w-[190px] h-[45px] bg-Grisnu rounded-lg" ></textarea>
                    </div>
                    <div className="space-y-2">
                        <p>Type d'expérience</p>
                        <select className="border h-[45px] bg-Grisnu w-[190px] rounded-lg">
                            <option  ></option>
                            <option className="" >En Ligne</option>
                            <option>Présentiel</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white">Type d'expérience</p>
                        <Link href="/recherche" >
                            <div class=" flex p bg-indigo-500 items-center justify-center rounded-lg w-[140px] h-[45px] space-x-2">
                                <button class="items-center font-medium text-sm text-white "  >Poster</button>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="flex">
                    <PhotographIcon className="w-10 h-10 cursor-pointer" />
                    <p className=" text-xs pt-[12px] ">*Ajouter une image ou un logo.</p>
                </div>

            </div>



            <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[430px] w-[1030px] rounded-xl ">
                <img src="../../public/devs.jpg" alt="" class="h-20 w-20 " />
                <div className="">
                    <div>
                        <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                    </div>
                    <span className="font-bold text-xl">Administrateur de base de données </span>
                    <div className=" flex space-x-8 ">
                        <div>
                            <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
                        </div>
                        <div>
                            <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">41devs, Gbedjrominde Cotonou</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

