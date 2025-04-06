import Link from "next/link";

const Medium = () => {
    return ( 
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='border rounded-xl p-4 text-5xl'>Medium</div>
            <Link href={`/`} className="overflow-hidden relative w-15 p-2 h-8 bg-[#111111]  border-none rounded-md text-xs font-bold cursor-pointer z-10 group text-center mt-5" >Back
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
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-4 text-[#e6caa0]" 
    >Back</span>
          </Link>
            <div className='text-3xl mt-10 border-b'>A Brief Guide</div>
        </div>
     );
}
 
export default Medium;