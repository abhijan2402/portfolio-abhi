import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { IoCallOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social_icon">
          <li>
            <a href="https://www.facebook.com/abhishek.jangid.7758235" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/abhishekjangid2401/?igshid=YmMyMTA2M2Y%3D" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-jangid-115283216" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          {/* <li>
            <a href="https://www.youtube.com/watch?v=nUUsUAPEjFc">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li> */}
        </ul>
        <ul class="menu">
          <li>
            <a href="tel:7976114618">
              <IoCallOutline />
              7976114618
            </a>
          </li>
          <li>
            <MdMailOutline />
            <a href="mailto:abhishek.jangid643@gmail.com">abhishek.jangid643@gmail.com</a>
          </li>
        </ul>
        <p>
          Call me ,always interested to work on coolest projects
        </p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};
export default Footer;
