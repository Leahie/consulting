import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion } from "framer-motion"

export default function Method(){
    return(
        <motion.div className="flex  justify-center gap-7 items-center flex-wrap "
            initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ type: "spring", duration: 2 }}
        >
            
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[45%] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 1</h1>
                <h2>Gather ideas</h2>
                <p>Before writing anything, take time to reflect. What moments have shaped your academic interests, personal values, or future goals? Jot down standout experiences — like the time you turned failure into growth, or how a summer internship reshaped your path. This step is all about digging deep and identifying the narratives that define "you".</p>
            </div>
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[45%] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 2</h1>
                <h2>Work out a path</h2>
                <p>Think about how to connect everything you think is most important about you into a single essay. Draft out an outline for your essay. Write phrases that speak to you. Try new ideas. Don’t become too attached to a single idea because another might pop up. Our consultants will work with you to present your narrative in the best way possible.</p>
            </div>
            <div className="bg-linear-to-b from-slate-100 to-slate-300 p-5 rounded-sm sm:w-[45%] lg:w-[20%] mx-5">
                <h1 className="font-bold text-[25px]">Step 3</h1>
                <h2>Rework and revise</h2>
                <p>After completing a rough draft, go over your writing and see if there is anything that can be done better. First drafts are never perfect and it takes a long time to be satisfied with a piece of writing. Don’t be afraid to completely discard a draft and try something new. Stuck? Just In Consulting will work with you to fine-tune your essay so that every detail is perfect.</p>
            </div>

        </motion.div>
    )
}