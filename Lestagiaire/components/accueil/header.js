import Link from "next/link";

export default function Header() {
    return (
        <div>

            <div className="bg-Mathias h-[440px] w-[1349px]  border-t border-Emma  relative ">
                <div className="flex flex-col pt-[74px] space-y-10  items-center">
                    <div className="text-[45px] text-center font-bold  w-[980px]  ">
                        <span className=" text-white   "> Trouves le</span>
                        <span className="text-Jaunefonce "> stage </span>
                        <span className=" text-white">de tes rêves et</span>
                        <span className=" text-Jaunefonce "> expérimente </span>
                        <span className=" text-white "> le monde professionnel  </span>


                    </div>
                    <p className="text-Emma w-[750px] font-light text-[18px] font-Lexe text-center">Explores les offres de stage les plus attractives du marché et connectes-toi avec les entreprises qui cherchent des talents comme toi.</p>
                </div>
                <div className="flex flex-col space-y-2 justify-center bg-white shadow-2xl absolute rounded-xl left-[168px] h-[156px] w-[1030px] top-[378px]  ">
                    <div className="flex space-x-6  pl-4 items-center ">
                        <div className="space-y-2">
                            <p>Filière</p>
                            <select className="border bg-Grisnu h-[45px] w-[190px]  rounded-lg">
                                <option></option>
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
                                <option className="" >En Ligne</option>
                                <option>Physique</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <p className="text-white">Type d'expérience</p>
                            <Link href="/recherche" >
                                <div class=" flex p bg-indigo-500 items-center justify-center rounded-lg w-[140px] h-[45px] space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-5 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    <button class="items-center font-medium text-sm text-white " >Rechercher</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className=" text-xs pl-4">*Astuce: Indiquez une ville ou un code postal dans la barre "où" afin d'afficher des résultats localisés.</p>
                </div>
            </div>
        </div>
    )
}
