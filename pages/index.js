
import Link  from 'next/link'
export default function Index() {
  return (
    <div className=' flex justify-center items-center h-[100vh] gap-20'>
    <Link href={'./home'}>
    <div className='button w-80 h-36 bg-blue-500 rounded-lg cursor-pointer select-none
        active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
        active:border-b-[0px]
        transition-all duration-200 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
        border-b-[1px] border-blue-400
    '>
		  <span class='flex flex-col justify-center items-center h-full text-white font-bold text-[2rem] '>Web Page CSS</span>
	  </div>
    </Link>


    <Link href={'./dashboard'}>
    <div className='button w-80 h-36 bg-red-500 rounded-lg cursor-pointer select-none
        active:translate-y-2  active:[box-shadow:0_0px_0_0_#f81b1b,0_0px_0_0_#851200]
        active:border-b-[0px]
        transition-all duration-200 [box-shadow:0_10px_0_0_#f81b1b,0_15px_0_0_#851200]
        border-b-[1px] border-red-400
    '>
		  <span className='flex flex-col justify-center items-center h-full text-white font-bold text-[2rem] '>Javascript Table</span>
	  </div>
    </Link>
    </div>
  )
}
