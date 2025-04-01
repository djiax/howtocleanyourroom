import Link from "next/link";




export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="py-12 text-center text-black ">
        A Sacred Collection of CLeanliness
      </div>

      <div className="">
        The wisdom you require to transform your room of chaos to a sanctuary
      </div>

      <div>
        <div>Messy Level</div>
        <div>
          <Link href={`/light`} />
          <Link href={`/medium`} />
          <Link href={`/chaos`} />
        </div>
      </div>
    </div>
  );
}
