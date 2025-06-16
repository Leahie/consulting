"use client"
import Hero from '@/(components)/Hero'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from "framer-motion"
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function ContactUs() {
    const [open, setOpen] = useState(false);
    const handleOpen = (leader = null) => {
        setOpen(!open);
    };

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
            <h2 className='font-bold text-[1.7em] pt-[5em] mx-3 lg:mx-[10em]'>
                    <span className='decoration-light-color decoration-4 underline underline-offset-[3px]'>Reach Out! </span>Our process begins with a short 15 minute conversation where we get to learn more about your student and you get your questions answered. 
            </h2>
        </div>
        {/* Buttons*/}
        <div className='bg-slate-100 flex justify-center gap-5 pt-[2em] pb-[10em] text-white text-[15px]'>
            <button className="cursor-pointer bg-slate-800 py-2 px-5 rounded">Book a Consultation</button>
            <button className="cursor-pointer bg-slate-800 py-2 px-5 rounded " onClick={()=>handleOpen()}>Interest Form</button>
        </div>


       </div> 
 
               <Dialog open={open} onClose={()=>handleOpen(null)} fullWidth maxWidth="lg" >
                <DialogTitle ></DialogTitle>
                <DialogContent className="p-4 ">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScQ01vdkhZ7SW7h_Qt0h_VN94AvTYsVcx7x7NG1DzRG07VxrA/viewform?embedded=true"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Google Form"
                    style={{ borderRadius: "12px", overflow: "hidden" }}
                >
                    Loading…
                </iframe>
                </DialogContent>
                <DialogActions>
                <Button variant="text" color="primary" onClick={handleOpen}>
                    Close
                </Button>
                </DialogActions>
            </Dialog> 
        </> 
       
    )
}