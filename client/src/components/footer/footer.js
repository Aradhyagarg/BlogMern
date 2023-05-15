import React from "react";
import styled from "styled-components";

import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <br></br>
              <form action="https://formspree.io/f/mbjeryzn" method="POST">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-about">
              <h3>Vibe-Techo</h3>
              <p>Electronic Products At Good Discount And Having A Good User Friendly Interface</p>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <br></br>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a className="icon"
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <br></br>
              <a className="footer-call" href="tel:1234567891">1234567891</a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Vibe-Techo. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 2rem 8rem;
    background-color: pink;
    border-radius: 1rem;
    box-shadow: green;
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  input, textarea{
    max-width: 30rem;
    color: white;
    border-radius:50px;
    padding: 1rem 2rem;
    border: 1px solid black;
    text-transform: uppercase;
   box-shadow: black;
}
    input[type="submit"]{
    max-width: 10rem;
    margin-top: 1rem;
    background-color: black;
    color: white;
    padding: .5rem 2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    }


  footer {
    padding: 0.5rem 0 0rem 0;
    background-color: #282A35;
    h3 {
      color: white;
      text-transform:uppercase;
      margin-bottom: 0.5rem;
    }
    p {
      color: white;
    }
    a{
  color: aliceblue;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
    }
    .icons{
      font-size: 1rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: .5rem;
        border: 4px solid white;
        .icons {
          color: white;
          font-size: 2rem;
          position: relative;
          cursor: pointer;
          transition: width 0.5s height 0.5s;
        }
        &:hover{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 1 rem;
    hr {
      margin-bottom: -5rem;
      color:red;
    }
  }
  @media (max-width: 600px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
  @media (max-width: 600px) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: 600px) {
       html {
      font-size: 50%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;

export default Footer;
