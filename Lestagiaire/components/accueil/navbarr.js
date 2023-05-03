import Link from "next/link";

export default function Navbarr() {
  return (
    <div className=" bg-Mathias relative h-[85px] w-[1349px] flex items-center   border-b-1">
        <div className="pl-32">
         <span className="text-white text-2xl font-Lexe font-bold">Lestagiaire.
        <span className="text-Jaune text-2xl font-bold">bj</span> </span>
        </div>

        <div className="absolute flex items-center space-x-14  right-32">
        <p className="text-Emma  text-xl ">Déposer une offre </p>
        <div className=" pt-1 hover:border-white hover:text-white hover:border  hover:brightness-200 rounded-full  w-44 justify-center  h-10 items-center">
        <Link class="flex space-x-2 justify-center items-center " href="/compte">

        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

  <p className="text-Emma   text-xl ">Connexion</p>
</Link>
        </div>

        </div>

    </div> 
  )
}
