import Link from "next/link";




export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="py-12 text-center text-black ">
        A Sacred Collection of Cleanliness
      </div>

      <div className="text-red-400">
        The wisdom you require to transform your room of chaos to a sanctuary
      </div>

      <div>
        <div className="text-black">Messy Level</div>
        <div>
          <Link href={`/light`} className="text-red-500" >Light</Link>
          <Link href={`/medium`} className='text-black'>Medium</Link>
          <Link href={`/chaos`} className='text-black'>Chaos</Link>
        </div>
      </div>
    </div>
  );
}
