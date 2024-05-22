import React, { useEffect, useRef } from "react"
import "./css/styles.css"
import "./css/dots.css"
import "./css/cards.css"
import "./css/typwriter.css"
import "./css/testimonials.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import cardbg from "./images/abstract-background-images-wallpaper-ai-generated_643360-33367.jpg"
import sehasdev from "./images/Seshadev-Padhi-removebg-preview.png"
import kirti from "./images/1709622482629.jpeg"

// import REG_form from "../RAG-Reg/page.jsx"

const ABT = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    if (window.location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [])
  useEffect(() => {
    const typingElements = document.querySelectorAll(".who")

    function checkScroll() {
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY || window.pageYOffset

      typingElements.forEach((typingElement) => {
        const elementOffsetTop = typingElement.getBoundingClientRect().top

        // If the top of the element is in the viewport, add the typing className
        if (elementOffsetTop < windowHeight - 100) {
          typingElement.classList.add("typing")
        }
      })

      // Remove event listener once the animation starts for all elements
      if (document.querySelectorAll(".who.typing").length === typingElements.length) {
        window.removeEventListener("scroll", checkScroll)
      }
    }

    window.addEventListener("scroll", checkScroll)

    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <div className="bodyabt">
      <div className="background">
        {[...Array(30)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <div className="content" style={{ paddingBottom: "0px", display: "flex" }}>
        <div className="welcome" style={{ paddingBottom: "0px" }}>
          <p
            style={{
              fontSize: "medium",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              paddingLeft: "5%",
              paddingTop: "10%",
            }}
          >
            WELCOME TO THE THE HUB OF DATA-DRIVEN INSIGHTS AND INNOVATION
          </p>
          <p></p>

          <h1
            style={{
              color: "#ff0000",
              paddingLeft: "5%",
              fontSize: "72px",
              background: "-webkit-linear-gradient(#ff00c6, #4c239d)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Society for Data Science.
          </h1>
          <br />
          <div className="intro">
            <p
              className="typed"
              style={{
                fontSize: "75%",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                paddingLeft: "5%",
                paddingRight: "25%",
              }}
            >
              Dive into the boundless
              <span className="type" style={{ "--n": "116" }}>
                world of data science with us, where inclusivity meets innovation, empowering students of all backgrounds to excel!
              </span>
            </p>
          </div>
          <br />
          <br />
        </div>
        <div className="reg" style={{ display: "flex", flexDirection: "column", marginTop: "15vh", marginRight: "10vw" }}>
          <img
            src="rag_bootcamp.jpeg"
            style={{
              height: "400px",
              width: "380px",
              borderRadius: "20px 20px 0px 0px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
          <a href="bootcamp" target="_blank">
            <button>Register now</button>
          </a>
        </div>
      </div>
      <section id="about" ref={aboutRef}>
        <div className="who" id="whi">
          <h6 className="we">/WHO WE ARE</h6>
          <h3 className="headings">
            The Society for Data Science, BIT Mesra is a pioneering student-run, not-for-profit organization dedicated to exploring the realms of data science and its diverse interdisciplinary
            applications.
          </h3>
          <br />
          <p className="para">
            Since its founding in 2019, we have united students from various disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on
            campus. Each semester, we focus on developing educational learning experiences like our technical workshops and decal courses to expand data science education on campus, hosting
            professional events for students to connect with industry leaders and grow their network, and conducting analytics consulting projects to help members gain experience and make an impact.
            Our program provides over a hundred students each semester with mentorship and data science skills through working in teams on a tangible group project. We aim to build an inclusive and
            accessible community where students of all levels and backgrounds can dive into the world of data science.
          </p>
          <br />
        </div>
        <div className="profile-container">
          <article className="profile">
            <h2 className="profile-username">Define</h2>

            <p>
              Data science is the interdisciplinary field that 
          uses statistical, computational, and analytical 
          methods to extract insights and knowledge from data.
            </p>
          </article>

          <article className="profile">
            <h2 className="profile-username">Build</h2>

            <p>
              Building a successful data science career 
          involves more than technical skills, 
          encompassing job acquisition, project management, 
          and leadership development.
            </p>
          </article>
        </div>
        <div className="who" id="whut">
          <h6 className="we">
            <br />
            /WHAT WE DO
          </h6>
          <h2 className="headings">We have everything you need to launch and to grow your academic environment.</h2>
          <br />
          <p className="para">
            The Society for Data Science is a non-profit society of data science enthusiasts that serves our members, improving the data science profession, eliminating bias and enhancing diversity,
            and advancing ethical data science throughout the world.
          </p>
          <br />
        </div>
        <div className="cards-container">
          <article className="cards">
            <img className="card__background" src={cardbg} alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193" />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  🚀
                  <br />
                  Workshop
                </h2>
                <p className="card__description">
                 The Data Science Workshop enhances your 
              practical skills, teaching you to develop 
              simple to advanced machine learning models 
              in Python, including bank fraud detection, 
              using real examples for real results.
                </p>
              </div>
            </div>
          </article>
          <article className="cards">
            <img className="card__background" src={cardbg} alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193" />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  ⚙️
                  <br />
                  Projects
                </h2>
                <p className="card__description">
                 Unlock the power of data with our dynamic 
              approach to analysis, using scientific 
              methods and cutting-edge algorithms. Gain 
              hands-on machine learning expertise and 
              transform data into actionable insights 
              through impactful projects. Embark on this 
              exciting adventure and elevate your data science career!
                </p>
              </div>
            </div>
          </article>
          <article className="cards">
            <img className="card__background" src={cardbg} alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193" />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  🌐
                  <br />
                  Open Source
                </h2>
                <p className="card__description">
                  Open-source has become the standard for building 
              software across diverse industries, with companies 
              both using open source code for their products and 
              recognizing the strategic value of contributing back.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="who">
          <h6 className="we">/WHAT THEY SAY</h6>
          <h2 className="headings">Testimonials</h2>
          <br />
        </div>
        <div className="profile-container">
          <article className="profile">
            <div className="profile-image">
              <img src={sehasdev} alt="Profile" />
            </div>
            <h2 className="profile-username">Prof. S. Padhi</h2>
            <small className="profile-user-handle">Department of Mathematics</small>
            <p>
              "Data scientists are analytical experts who utilize their skills in both technology and social science to find trends and manage data. They use industry knowledge, contextual
              understanding, skepticism of existing assumptions - to uncover solutions to business challenges"
            </p>
          </article>

          <article className="profile">
            <div className="profile-image">
              <img src={kirti} alt="Profile" />
            </div>
            <h2 className="profile-username">Dr. Kirti Avishek</h2>
            <small className="profile-user-handle">Department of Civil and Environmental Science Engineering</small>
            <p>
              "The expert at anything was once a beginner. We believe that the most valuable asset of a community are the people passionate about their field and willing to share their knowledge and
              experience with others - that are true educators who help others grow!"
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default ABT
