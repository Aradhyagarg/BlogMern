import React from 'react'
import "./about.css";
import Footer from "../../components/footer/footer";
export default function About() {
  return (
    <>
    <div className="section">
        <div className="container">
            <div className="content-section">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="content">
                    <h3>loving = donating</h3>
                    <p>Each month, I spend hundreds of hours and thousands of dollars keeping Bloggers going. For seventeen years, it has remained free and ad-free and alive thanks to patronage from readers. I have no staff, no interns, not even an assistant — a thoroughly one-woman labor of love that is also my life and my livelihood. If this labor has made your own life more livable in the past year (or the past decade), please consider aiding its sustenance with a one-time or loyal donation. Your support makes all the difference.
                    </p>
                    <div className="button">
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="social">
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="image-section">
                <figure>
                <img src="https://raw.githubusercontent.com/dhakallena/Responsive-About-Us-section-Using-Html-And-Css/master/image/img%20one.jpg"
                alt='' className="img-style"></img>
                </figure>
            </div>
        </div>
    </div>
  <Footer/>
    </>
  )
}
