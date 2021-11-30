import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Animated } from "react-animated-css";
import { Brand } from '../../components/exportComponent';
import './footer.css';
import { google, slack, atlassian, dropbox, shopify } from '../../components/brand/imports';


const Footer = () => {
    return (

        <div className="gpt3__footer section__padding" id="contact">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Available on </h1>
                <div className="gpt3__brand section__padding_footer">
                    {/* <div>
                        <img src={google} />
                    </div>
                    <div>
                        <img src={slack} />
                    </div>
                    <div>
                        <img src={atlassian} />
                    </div>
                    <div>
                        <img src={dropbox} />
                    </div>
                    <div>
                        <img src={shopify} />
                    </div> */}

                    <p align="left">
                        <a id="image" href="https://codepen.io/amanjaiswal159" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg" alt="amanjaiswal159" height="30" width="40" /></a>
                        <a id="image" href="https://dev.to/amanjaiswal668" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="amanjaiswal668" height="30" width="40" /></a>
                        <a id="image" href="https://twitter.com/amanjaiswal159" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="amanjaiswal159" height="30" width="40" /></a>
                        <a id="image" href="https://linkedin.com/in/amanjaiswal159" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="amanjaiswal159" height="30" width="40" /></a>
                        <a id="image" href="https://instagram.com/jaiswal__aman__" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="jaiswal__aman__" height="30" width="40" /></a>
                        <a id="image" href="https://auth.geeksforgeeks.org/user/amanjaiswal159aj" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="amanjaiswal159aj" height="30" width="40" /></a>
                        <a id="image" href="https://www.hackerrank.com/amanjaiswal159" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="jaiswal__aman__" height="30" width="40" /></a>
                        <a id="image" href="https://www.hackerearth.com/@aman3267" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerearth.svg" alt="@aman3267" height="30" width="40" /></a>
                    </p>
                </div>
            </div>
            {/* <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to have one like them</h1>
            </div>

            <div className="gpt-connect">
                <div class="container">
                    <form action="">
                        <label for="name">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="email">Mail</label>
                        <input type="email" id="fname" name="firstname" placeholder="Your mail.." />
                        <label for="subject">Message</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div> */}



            <div className="gpt3__footer-copyright">
                <p>@2021 Aman Jaiswal.All rights reserved.</p>
            </div>
        </div >
    );
}
export default Footer
