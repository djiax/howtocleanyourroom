import Link from "next/link";




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">

      <div className="border rounded-xl p-4 text-5xl">
        A Sacred Collection of Cleanliness
      </div>

      <div className="mt-7">
        The wisdom you require to transform your room of chaos to a sanctuary
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className="text-3xl mt-15 mb-8 ">Messy Level</div>

        <div className='flex gap-4'>
          <Link href={`/light`} className="overflow-hidden relative w-32 p-2 h-12 bg-[#111111]  border-none rounded-md text-xl font-bold cursor-pointer z-10 group text-center" >Light
          <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#f2cb8f] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#edb865] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#e8a236] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-10 text-[#e6caa0]" 
    >Light</span>
          </Link>

          <Link href={`/medium`} className="overflow-hidden relative w-32 p-2 h-12 bg-[#111111]  border-none rounded-md text-xl font-bold cursor-pointer z-10 group text-center">Medium
          <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#f2cb8f] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#edb865] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#e8a236] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6.5 text-[#e6caa0]"
    >Medium</span>
          </Link>

          <Link href={`/chaos`} className="overflow-hidden relative w-32 p-2 h-12 bg-[#111111]  border-none rounded-md text-xl font-bold cursor-pointer z-10 group text-center">Chaos
          <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#f2cb8f] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#edb865] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-[#e8a236] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10 text-[#e6caa0]"
    >Chaos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
