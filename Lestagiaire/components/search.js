import Link from "next/link"
export default function Search() {
  return (
    <div>

      <div className="bg-Mathias h-[210px]  border-t border-Emma  relative ">
        <p className="font-normal absolute left-[183px] top-[45px] text-[32px] text-blanc">Résultat pour : Informatique de gestion à Cotonou</p>


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
            <div>
              <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
            </div>
            <span className="font-bold text-xl">Administrateur de base de données </span>
            <div className="scroll-snap-align-start flex space-x-8 ">
              <div>
                <span className=" text-sm text-gris">Formation:</span><span className="text-griis">Informatique de gestion</span>
              </div>
              <div>
                <span className=" text-sm text-gris" >Entreprise:</span><span className="text-sm text-Blueciel underline">41devs, Gbedjrominde Cotonou</span>
              </div>
            </div>
          </div>


        </div>
        <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[620px] w-[1030px] rounded-xl " >
          <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
          <div className="">
            <div>
              <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
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
        <div className="flex items-center space-x-8 pl-8 border scroll-snap-align-start absolute h-[143px] left-[168px] top-[787px] w-[1030px] rounded-xl ">
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
        <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[954px] w-[1030px] rounded-xl  ">
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
        <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[1121px] w-[1030px] rounded-xl  ">
          <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
          <div className="">
            <div>
              <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
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
        <div className="flex items-center space-x-8 pl-8 border absolute h-[143px] left-[168px] top-[1288px] w-[1030px] rounded-xl  ">
          <img src="../../public/devs.jpg" alt="" class="h-20 w-20 scroll-snap-align-start" />
          <div className="">
            <div>
              <p className="bg-gray-200 rounded-xs text-blue-800 font-semibold text-xs w-[80px]">Alternance </p>
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
    </div>
  )
}
