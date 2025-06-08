import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion"

export default function Method(){
    return(
        <motion.div className="flex  justify-center gap-7 items-center flex-wrap "
            initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ type: "spring", duration: 2 }}
        >
            
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[70vw] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 1</h1>
                <h2>Subtitle</h2>
                <p>Before writing anything, take time to reflect. What moments have shaped your academic interests, personal values, or future goals? Jot down standout experiences — like the time you turned failure into growth, or how a summer internship reshaped your path. This step is all about digging deep and identifying the narratives that define *you*.</p>
            </div>
            <ArrowRightAltIcon className='text-white'/>
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[45%] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 2</h1>
                <h2>Subtitle</h2>
                <p>Before writing anything, take time to reflect. What moments have shaped your academic interests, personal values, or future goals? Jot down standout experiences — like the time you turned failure into growth, or how a summer internship reshaped your path. This step is all about digging deep and identifying the narratives that define *you*.</p>
            </div>
            <ArrowRightAltIcon className='text-white'/>
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[45%] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 3</h1>
                <h2>Subtitle</h2>
                <p>Before writing anything, take time to reflect. What moments have shaped your academic interests, personal values, or future goals? Jot down standout experiences — like the time you turned failure into growth, or how a summer internship reshaped your path. This step is all about digging deep and identifying the narratives that define *you*.</p>
            </div>

        </motion.div>
    )
}