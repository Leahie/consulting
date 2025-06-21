import Image from "next/image";
import main from '@/(assets)/1.jpg'
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Hero.css"
interface HeroProps{
    source: string
    tagline: React.ReactNode
    icon?: React.ReactNode;
}

export default function Hero(props: HeroProps){
    return(
        <div className={['Hero', "font-barlow"].join(' ')}>

            <video
                style={{ objectFit: "cover", pointerEvents: "none" }}
                className="bgimg"
                autoPlay
                loop
                muted
                playsInline
            >
            <source src={props.source} type="video/mp4" />
            </video>
            <div className="gradimg"></div>
            <div className="Info">
            {props.tagline}

            {props.icon && (
                <div className="">
                {props.icon}
                </div>
            )}
             </div>
        </div>
    )
}