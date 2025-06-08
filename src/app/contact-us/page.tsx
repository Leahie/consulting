import Hero from '@/(components)/Hero'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from "framer-motion"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";


export default function ContactUs() {
    return(
       <>
       <div>
        <Hero
            source="/2.mp4"
            tagline={<h1 className="text-[7em]">{"Getting Started"}</h1>}
            icon={

                <ArrowDropDownCircleIcon sx={{ fontSize: '7em', color: 'white' }}  className="mt-[0.5em]" />

            }
            
        />
        {/* Why Should You Trust Us */}
        <div className="bg-slate-100 flex justify-center text-center">
            <h2 className='font-bold text-[1.7em] pt-[5em] mx-[10em]'>
                    <span className='decoration-light-color decoration-4 underline underline-offset-[3px]'>Reach Out! </span>Our process begins with a short 15 minute conversation where we get to learn more about your student and you get your questions answered. 
            </h2>
        </div>
        {/* Buttons*/}
        <div className='bg-slate-100 flex justify-center gap-5 pt-[2em] pb-[10em] text-white text-[15px]'>
            <button className="bg-slate-800 py-2 px-5 rounded">Book a Consultation</button>
            <button className="bg-slate-800 py-2 px-5 rounded">Interest Form</button>
        </div>


       </div> 

               <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{</DialogHeader>
                <DialogBody>
            
                        {/* Exercise Details */}
                        <div className="flex flex-wrap flex-col gap-4 py-5">
                            <label className="block text-sm font-semibold">Body Region:</label>
                            <select
                                value={exercise.body_region}
                                onChange={(e) => setExercise((prev) => ({ ...prev, body_region: e.target.value }))}
                            >
                            <option value="" disabled hidden>Choose a body region</option>
                            {body_regions.map((elem) => (
                                <option key={elem} value={elem}>
                                {elem}
                                </option>
                            ))}
                            </select>
                            
                            <label className="block text-sm font-semibold">Difficulty:</label>
                            <select
                            value={exercise.difficulty}
                            onChange={(e) => setExercise((prev) => ({ ...prev, difficulty: e.target.value }))}
                            >
                            <option value="" disabled hidden>Choose a difficulty</option>
                            {difficulty_levels.map((elem) => (
                                <option key={elem} value={elem}>
                                {elem}
                                </option>
                            ))}
                            </select>

                            <label className="block text-sm font-semibold">Primary Classification:</label>
                            <select
                            value={exercise.primary_classification}
                            onChange={(e) =>
                                setExercise((prev) => ({ ...prev, primary_classification: e.target.value }))
                            }
                            >
                            <option value="" disabled hidden>Choose a classification</option>
                            {primary_classifications.map((elem) => (
                                <option key={elem} value={elem}>
                                {elem}
                                </option>
                            ))}
                            </select>

                            <label className="block text-sm font-semibold">Target Muscle:</label>
                            <select
                            value={exercise.target_muscle}
                            onChange={(e) => setExercise((prev) => ({ ...prev, target_muscle: e.target.value }))}
                            >
                            <option value="" disabled hidden>Choose a target muscle</option>
                            {target_muscle.map((elem) => (
                                <option key={elem} value={elem}>
                                {elem}
                                </option>
                            ))}
                            </select>

                            <label className="block text-sm font-semibold">Primary Equipment:</label>
                            <select
                            value={exercise.primary_equipment}
                            onChange={(e) =>
                                setExercise((prev) => ({ ...prev, primary_equipment: e.target.value }))
                            }
                            >
                            <option value="" disabled hidden>Choose equipment</option>
                            {equipment.map((elem) => (
                                <option key={elem} value={elem}>
                                {elem}
                                </option>
                            ))}
                            </select>
                            <label className="block text-sm font-semibold">Video Url:</label>
                            <input type="text" 
                                value={exercise.short_demo} 
                                onChange={(e) => setExercise((prev) => ({...prev, short_demo: e.target.value}))}
                                className="w-full border px-2 py-1 rounded"
                            /> 

                        </div>

                </DialogBody>
                <DialogFooter>
                    <Button variant="text"
                    color="red"
                    className="mr-1"
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteEx()}}
                        >Delete
                    </Button>
                    <Button
                    variant="text"
                    color=""
                    onClick={handleOpen}
                    className="mr-1"
                    >
                    <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </> 
       
    )
}