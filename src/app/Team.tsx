"use client";
import leaders from "@/(assets)/Leadership.json"
import { motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


interface LeaderTypes {
  name: string;
  role: string;
  college: string;
  image: string;
  qf: string[];
  bio: string;
}


export default function Team(){
    const [open, setOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState<LeaderTypes|null>(null);

    const handleOpen = (leader: LeaderTypes | null) => {
        setSelectedLeader(leader);
        setOpen(!open);
    };

    return(
        
        <div className="bg-slate-100 py-5 text-black">
            
                  <h2 className=" flex justify-between items-end text-[40px] mx-[1em] my-[1em] text-dark-color font-barlow text-500 flex flex-col">
                <span className="font-bold text-[100px]">Dive in </span> <span>with our trusted advisors</span>
            </h2>  
      
      <div className="flex flex-wrap gap-[2em] mx-[5vw] mb-[10vh] justify-center ">
          {
              leaders.map((leader, index)=>(
                  
                <motion.div className={["flex flex-col content-center items-center justify-center max-w-xs m-4 ", "PockerCard"].join(" ")}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ type: "spring", duration: 2 }}
                  whileHover={{
                      scale: 1.05, 
                      rotate:0,
                      cursor: "pointer" 
                    }}
                    onClick={() => handleOpen(leader)}
                >

                  <motion.div  className="card card-user card-user-style-1 bg-transparent border-0"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ type: "spring", duration: 2 }}>

                      
                          <Image className="rounded-lg w-full shadow-lg mb-2" src={leader.image} width={220} height={220} alt="Picture of the author"/>
                      
                      <div className="card-body">

                                      <p className="card-text small ">{leader.role}</p>
                          
                                      <a href="https://admissionado.com/team-member/nour-khachemoune/" className="font-semibold text-[25px] stretched-link text-decoration-none mb-2 d-inline-block">{leader.name}</a>
                                      
                                      <p className="card-text small text-slate-500 m-0 fw-medium">{leader.college}</p>
                                      <ul className="flex gap-2 text-[12px] sm:text-[15px]" style={{ color: leader.color }}>
                                          {leader.qf.map(item => (
                                              <li key={item}>{item}</li>
                                          ))}
                                      </ul>
                                      

                          
                      </div>

                  </motion.div>
                </motion.div>
                
              ))
          }
      </div>
      {/* Modal */}
      
      <Dialog
        open={open}
        onClose={()=>handleOpen(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {selectedLeader && (
          <>
        <DialogTitle id="alert-dialog-title">
          
          <p className="text-gray-800 font-medium mb-2">{selectedLeader.name} - {selectedLeader.role}</p>
            <p className="text-sm text-gray-600">{selectedLeader.college}</p>
        </DialogTitle>
        <DialogContent>
            <div className="flex justify-center gap-5">
                <div className="flex flex-col justify-start items-center gap-6 px-4 max-w-4xl mx-auto">
                    <Image
                        className="rounded-md mb-4 object-cover"
                        src={selectedLeader.image}
                        width={250}
                        height={250}
                        alt={`Image of ${selectedLeader.name}`}
                    />
                    <div className="text-left space-y-4 max-w-xl">
                        <p className="text-gray-800 text-base leading-relaxed">{selectedLeader.bio}</p>
                    </div>
                    </div>
            </div>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleOpen(null)}>Close</Button>
        </DialogActions>
        </>)}
      </Dialog>
      
        </div>
    )
}