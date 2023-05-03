
export default function Body() {
    return (
        <div className=" relative">
            <div className=" absolute w-[162px] left-[183px] top-[175px] ">
                <p className="font-semibold text-xl">Offres récentes:</p>
            </div>
            <div>

                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[230px] w-[1030px] rounded-xl ">
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
                            </div>                        </div>
                    </div>


                </div>
                <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[398px] w-[1030px] rounded-xl " >
                    <img src="../../public/devs.jpg" alt="" class="h-20 w-20 " />
                    <div className="">
                        <div className=" ">
                            <div>
                                <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
                            </div>
                        </div>
                        <p className="font-bold text-xl">Développeur Frontend </p>
                        <div className="scroll-snap-align-start flex space-x-8 ">
                            <div>
                                <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
                            </div>
                            <div>
                                <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">Isocel Bénin, Cotonou</span>
                            </div>
                        </div>
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
                        <div>
                            <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
                        </div>
                        <div>
                            <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">SBIN Ganhi, Cotonou</span>
                        </div>
                        </div>
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
                        <div>
                            <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
                        </div>
                        <div>
                            <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">Eya Center</span>
                        </div>
                        </div>
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
                        <div>
                            <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
                        </div>
                        <div>
                            <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">MTN Bénin, Cotonou</span>
                        </div>
                        </div>
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

