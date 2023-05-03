import Link from "next/link"

export default function Validation() {
    return (

        <div className="">
            <div className=" bg-indigo-500 relative h-[85px] flex items-center  border-b-1">
                <div className="pl-32">
                    <span className=""> <span className="text-white text-2xl font-bold">Lestagiaire.</span>
                        <span className="text-yellow-300 text-2xl font-bold">bj</span> </span>
                </div>
                <div className="absolute flex items-center space-x-14  right-32">
                    <p className="text-white  text-xl "> </p>
                    <div className=" ">
                        <button className="text-white  space-x-2 flex hover:border-white hover:bg-gray-200  hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl " >
                            Profile
                        </button>
                    </div>
                    <div className=" ">
                        <button className="text-white  flex space-x-2   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center  text-xl ">Postuler</button>
                    </div>
                    <Link href="/validationoffre" >

                        <div className=" ">
                            <button className="text-white flex space-x-2   hover:border-white hover:border hover:brightness-200 rounded-full w-44  h-10  justify-center items-center   text-xl ">voir offres</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=" absolute w-[162px] left-[183px] top-[175px] ">
                <p className="font-semibold text-xl">Offres récentes:</p>
            </div>
            <div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[230px] w-[1030px] rounded-xl ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div>
                            <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                        </div>
                        <span className="font-bold text-xl">Administrateur de base de données </span>
                        <div className="scroll-snap-align-start flex space-x-8 ">
                            <span className="text-griis">  <span className="text-gris text-sm">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris text-sm">Entreprise: <span className="text-Blueciel underline">41devs, Gbedjrominde Cotonou</span> </span>
                        </div>
                        <div className="absolute left-[930px] bottom-[10px]">
                            <button className="text-amber-600 hover:text-indigo-700 text-sm font-medium">Valider</button>
                        </div>
                        <div className="absolute left-[850px] top-[10px]  text-sm">
                            <p className="text-gris">Offre publiée il a 2 jours</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[398px] w-[1030px] rounded-xl " >
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div className=" ">
                            <div>
                                <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                            </div>
                        </div>
                        <p className="font-bold text-xl">Développeur Frontend </p>
                        <div className="scroll-snap-align-start flex space-x-8 ">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">Isocel Bénin, Cotonou</span> </span>
                        </div>
                    </div>
                    <div className="absolute left-[900px] bottom-[10px]">
                        <button className="text-amber-600 hover:text-indigo-700 text-sm font-medium">Valider</button>
                    </div>
                    <div className="absolute left-[820px] top-[10px]  text-sm">
                        <p className="text-gris">Offre publiée il a 2 jours</p>
                    </div>
                </div>
                <div className="flex items-center space-x-8 pl-8 border scroll-snap-align-start absolute h-[143px] left-[168px] top-[565px] w-[1030px] rounded-xl ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div>
                            <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                        </div>
                        <p className="font-bold text-xl">Développeur Backend </p>
                        <div className="flex space-x-8">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">SBIN Ganhi,Cotonou</span> </span>
                        </div>
                    </div>
                    <div className="absolute left-[900px] bottom-[10px]">
                        <button className="text-amber-600 hover:text-indigo-700 text-sm font-medium">Valider</button>
                    </div>
                    <div className="absolute left-[820px] top-[10px]  text-sm">
                        <p className="text-gris">Offre publiée il a 2 jours</p>
                    </div>
                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[732px] w-[1030px] rounded-xl  ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div>
                            <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                        </div>
                        <p className="font-bold text-xl">Analyste de données </p>
                        <div className="flex space-x-8">
                            <span className="text-griis"> <span className="text-gris">Formation:</span> Informatique de gestion</span>
                            <span className="text-gris">Entreprise: <span className="text-Blueciel underline">Eya Center</span> </span>
                        </div>
                    </div>
                    <div className="absolute left-[900px] bottom-[10px]">
                        <button className="text-amber-600 hover:text-indigo-700 text-sm font-medium">Valider</button>
                    </div>
                    <div className="absolute left-[820px] top-[10px]  text-sm">
                        <p className="text-gris">Offre publiée il a 2 jours</p>
                    </div>
                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[900px] w-[1030px] rounded-xl  ">
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
                    <div className="">
                        <div className=" ">
                            <div>
                                <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                            </div>
                        </div>
                        <p className="font-bold text-xl">Administrateur de base de données </p>
                        <div className="flex space-x-8 ">
                            <span className="text-griis">   <span className="text-gris">Formation:</span> Informatique de gestion </span>
                            <p className="text-gris">Entreprise: <span className="text-Blueciel underline">MTN Bénin, Marina Cotonou</span> </p>
                        </div>
                    </div>
                    <div className="absolute left-[900px] bottom-[10px]">
                        <button className="text-amber-600 hover:text-indigo-700 text-sm font-medium">Valider</button>
                    </div>
                    <div className="absolute left-[820px] top-[10px]  text-sm">
                        <p className="text-gris">Offre publiée il a 2 jours</p>
                    </div>
                </div>
            </div>
            <div className="flex  left-[595px] absolute top-[1100px] ">
                <button class=" border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 focus:shadow-outline focus:outline-none hover:text-white  py-2 px-4 rounded-lg" type="button">
                    Voir toutes les offres
                </button>
            </div>
        </div>
    )
}
