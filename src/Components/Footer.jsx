import React from "react";
import FooterLogo from "../assets/images/footer-logo.png";
import { Link, NavLink } from "react-router-dom";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, PhoneIcon, TwitterIcon } from "../Utils/Svg"

export default function Footer() {
    return (
        <>
            <footer className="mt-[60px] pt-[25px] lg:mt-[100px] lg:pt-[64px]">
                <div className="container">
                    <div className="grid gap-[24px] pb-[20px] grid-cols-[1fr] lg:grid-cols-[1fr,700px] MD:pb-[40px]">
                        <div className="mb-[10px] lg:mb-0">
                            <Link to="/">
                                <img src={FooterLogo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="flex gap-[24px] flex-col md:flex-row">
                            <ul className="footer-nav float-left flex-wrap gap-[24px] w-full">
                                <li>
                                    <NavLink to="/about-us">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/plans">Plans</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/how-it-work">How it works</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/invest">Invest</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/apply">Apply</NavLink>
                                </li>
                            </ul>
                            <div className="w-full max-w-[190px]">
                                <h6 className="mb-[20px] font-[600]">Contact Us</h6>
                                <ul className="contact-icon">
                                    <li>
                                        <a href="tel:+678-404-0782"><PhoneIcon /> +678-404-0782</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@swiftride.net"><EmailIcon />info@swiftride.net</a>
                                    </li>
                                    <li>
                                        <LocationIcon /> Atlanta, Georgia
                                    </li>
                                </ul>
                                <ul className="flex gap-[24px] mt-[25px]">
                                    <li>
                                        <a href="#" target="_blank"><FacebookIcon /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><LinkedinIcon /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><InstagramIcon /></a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank"><TwitterIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px]">
                        <ul className="font-[300] flex flex-wrap gap-[24px] w-full mb-[14px]">
                            <li>
                                <NavLink to="/terms">Terms</NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacy">Privacy</NavLink>
                            </li>
                        </ul>
                        <p className="text-[14px] font-[300] md:text-[16px]">@ 2023 Arrivy Inc. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
