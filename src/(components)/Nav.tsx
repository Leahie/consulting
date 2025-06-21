"use client";
import Link from 'next/link'
import Hamburger from './Hamburger';
import { Montserrat } from "next/font/google";
import React, {useState, useEffect} from 'react';
import "./Nav.css"

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

interface BoxProps{
    place: number;
}

export default function Nav(props: BoxProps){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside or on link
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    
    return(
        <>  
            <button
                className={`hamburger-btn transition-all ${
                isMenuOpen
                    ? 'fixed top-6 right-6 z-[10001]'
                    : 'absolute top-[4.5em] right-[2.5em] z-[100]'
                }`}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
            >
                <Hamburger />
            </button>

            <div className={`nav-container ${montserrat.className}`}>
                <div className="nav-logo">
                    <Link href="/" className="logo-link text-[20px] sm:text-[25px]">UniBound Counsulting</Link>

                </div>

                {/* Desktop Navigation */}
                <div className="nav-links-desktop">
                    <Link 
                        href="/pricing" 
                        className={props.place === 0 ? 'active' : ''}
                    >
                        Packages & Pricing
                    </Link>
                    <Link 
                        href="/about" 
                        className={props.place === 1 ? 'active' : ''}
                    >
                        About
                    </Link>
                    <Link 
                        href="/essayedit" 
                        className={props.place === 2 ? 'active' : ''}
                    >
                        College Essay Review
                    </Link>
                </div>

                <div className="nav-btn-desktop">
                    <Link href="/contact-us" className="consultation-btn">
                        <span>Free Consultation</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                {/* Close button in overlay */}

                <div className="mobile-menu-content">
                    <div className="mobile-nav-links">
                        <Link 
                            href="/pricing" 
                            className={`mobile-link ${props.place === 0 ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Packages & Pricing
                        </Link>
                        <Link 
                            href="/about" 
                            className={`mobile-link ${props.place === 1 ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                        <Link 
                            href="/essayedit" 
                            className={`mobile-link ${props.place === 2 ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            College Essay Review
                        </Link>
                    </div>
                    
                    <div className="mobile-consultation-section">
                        <Link 
                            href="/contact-us" 
                            className="mobile-consultation-btn"
                            onClick={closeMenu}
                        >
                            <span>Free Consultation</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}