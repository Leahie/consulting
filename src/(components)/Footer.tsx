
import FooterInfo from "@/(assets)/Footer.json"
import FooterInfo1 from "@/(assets)/Footer1.json"
export default function Footer(){
    return(
        <div className="flex mt-[2em] text-slate-600 flex-col sm:flex-row">
            <div className=" bg-black-color flex  flex-wrap sm:justify-start  sm:pt-[2.5em] pb-[1.3em] px-[2em]  gap-[2em] ">
                {/* <div><FaSpotify />
                    <div>
                        <h1>On Repeat</h1>
                        <p></p>
                    </div>
                
                </div> */}
                <p >&copy; 2025  Leah Zhang</p>
            </div>
            <div className="w-[50%] bg-black-color flex flex-wrap sm:justify-end sm:pt-[2.5em] pb-[1.3em] px-[2em]  gap-[2em]">
                <div className=" flex gap-5 sm:flex-row flex-col ">
                    {
                    FooterInfo1.map(({name, link}, index)=>(
                            <a className=" font-normal" href={link} key={index}>{name} </a>
                        )) 
                    }
                    </div>
                   
            </div>
            
        </div>
        
    )
}