import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div className="bg-chaitea bg-contain">
        <div className="flex justify-center gap-2 flex-col items-center text-white h-[50vh]">
          <div className="font-bold text-3xl md:text-5xl flex gap-2 items-center ">
            <h1>Buy Me a Chai</h1>
            <span><Image src="/images/chai.gif" alt="chai" width={64} height={64} className="pb-2 md:pb-4 md:h-[80px] md:w-[64px]  w-10" /></span>
          </div>
          <p className="md:text-md text-sm  md:font-semibold mx-2 text-center">A crowdfunding plateform for creators. Get funded by your fans and followers. Start Now!</p>
          <div>
            <Link href={"/loginpage"}>
              <button type="button" className="custom-button rounded-xl m-2">Start Now!</button>
            </Link>
            <Link href={"/about"}>
              <button type="button" className="custom-button rounded-xl  m-2">Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-400 opacity-60 "></div>
      <div className="text-purple-950 md:w-[80vw] w-[90vw] mx-auto py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center my-4">Your Fans can buy you a Chai</h2>
        <div className=" flex  gap-2 md:justify-around my-8">
          <div className="item flex flex-col  items-center gap-2 ">
            <Image src="/images/fund.png" alt="fund_Image" width={100} height={100} className="bg-slate-400 rounded-full p-2 w-[60px] md:w-[80px] text-black" />
            <p className="font-bold text-sm text-center md:text-md">Fans want to help</p>
            <p className='text-sm md:text-md text-center'>Your fans are available for you to help you</p>
          </div>
          <div className="item flex flex-col  items-center gap-2 ">
            <Image src="/images/coin.png" alt="fund_Image" width={100} height={100} className="bg-slate-400 rounded-full p-2 w-[60px] md:w-[80px] text-black" />
            <p className="font-bold text-sm text-center md:text-md">Fans want to help</p>
            <p className='text-sm md:text-md text-center'>Your fans are available for you to help you</p>
          </div>
          <div className="item flex flex-col  items-center gap-2 ">
            <Image src="/images/group.png" alt="fund_Image" width={100} height={100} className="bg-slate-400 rounded-full p-2 w-[60px] md:w-[80px] text-black" />
            <p className="font-bold text-sm text-center md:text-md">Fans want to help</p>
            <p className='text-sm md:text-md text-center'>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gray-400 opacity-60 "></div>
      <div className="text-purple-950 w-[80vw]  mx-auto py-4">
        <h2 className=" text-2xl md:text-3xl font-bold text-center my-4">History of Tea</h2>
        <div className=" flex justify-around  my-8 ">
          <iframe src="https://www.youtube.com/embed/LaLvVc1sS20?si=qD9T3fxtEbAiYj54&amp;start=1" title="YouTube video player" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg shadow-[10px_10px_80px_-10px_#b16881] md:w-[400px] w-[80vw] md:h-[200px]"></iframe>
        </div>
      </div>
    </>
  );
}
