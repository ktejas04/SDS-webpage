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
      if (
        document.querySelectorAll(".who.typing").length ===
        typingElements.length
      ) {
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
      <div className="content" style={{ paddingBottom: "0px" }}>
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
                world of data science with us, where inclusivity meets
                innovation, empowering students of all backgrounds to excel!
              </span>
            </p>
          </div>
          <br />
          <br />
          <div className="asocials" style={{ paddingLeft: "5%" }}>
            <a href="https://www.facebook.com/people/Society-for-Data-Science-BIT-Mesra/100063931007042/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/sds.bitm/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/mycompany/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        {/* <REG_form className="RAG" /> */}
      </div>
      <section id="about" ref={aboutRef}>
        <div className="who" id="whi">
          <h6 className="we">/WHO WE ARE</h6>
          <h3 className="headings">
            The Society for Data Science, BIT Mesra is a pioneering student-run,
            not-for-profit organization dedicated to exploring the realms of
            data science and its diverse interdisciplinary applications.
          </h3>
          <br />
          <p className="para">
            Since its founding in 2019, we have united students from various
            disciplines behind our shared passion for all things data. Our
            mission is to foster a strong data science community on campus. Each
            semester, we focus on developing educational learning experiences
            like our technical workshops and decal courses to expand data
            science education on campus, hosting professional events for
            students to connect with industry leaders and grow their network,
            and conducting analytics consulting projects to help members gain
            experience and make an impact. Our program provides over a hundred
            students each semester with mentorship and data science skills
            through working in teams on a tangible group project. We aim to
            build an inclusive and accessible community where students of all
            levels and backgrounds can dive into the world of data science.
          </p>
          <br />
        </div>
        <div className="profile-container">
          <article className="profile">
            <h2 className="profile-username">Define</h2>

            <p>
              Data science is a "concept to unify statistics, data analysis,
              machine learning and their related methods" in order to
              "understand and analyze actual phenomena" with data. It employs
              techniques and theories drawn from many fields within the context
              of mathematics, statistics, computer science, and information
              science.
            </p>
          </article>

          <article className="profile">
            <h2 className="profile-username">Build</h2>

            <p>
              You are going to need more than technical knowledge to succeed as
              a data scientist. Build a Career in Data Science teaches you what
              school leaves out, from how to land your first job to the
              lifecycle of a data science project, and even how to become a
              manager.
            </p>
          </article>
        </div>
        <div className="who" id="whut">
          <h6 className="we">
            <br />
            /WHAT WE DO
          </h6>
          <h2 className="headings">
            We have everything you need to launch and to grow your academic
            environment.
          </h2>
          <br />
          <p className="para">
            The Society for Data Science is a non-profit society of data science
            enthusiasts that serves our members, improving the data science
            profession, eliminating bias and enhancing diversity, and advancing
            ethical data science throughout the world.
          </p>
          <br />
        </div>
        <div className="cards-container">
          <article className="cards">
            <img
              className="card__background"
              src={cardbg}
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  🚀
                  <br />
                  Workshop
                </h2>
                <p className="card__description">
                  The Data Science Workshop focuses on building up your
                  practical skills so that you can understand how to develop
                  simple machine learning models in Python or even build an
                  advanced model for detecting potential bank frauds with
                  effective modern data science. You'll learn from real examples
                  that lead to real results.
                </p>
              </div>
            </div>
          </article>
          <article className="cards">
            <img
              className="card__background"
              src={cardbg}
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  ⚙️
                  <br />
                  Projects
                </h2>
                <p className="card__description">
                  "Unlock the power of data with our dynamic approach to
                  analysis! Dive into the world of data science, where
                  scientific methods and cutting-edge algorithms illuminate the
                  path to discovery. Harness the potential of machine learning
                  with hands-on expertise, transforming data into actionable
                  insights. But wait, there's more! Elevate your data science
                  journey with impactful projects, the cornerstone of your
                  career growth. Let's embark on this exciting adventure
                  together!"
                </p>
              </div>
            </div>
          </article>
          <article className="cards">
            <img
              className="card__background"
              src={cardbg}
              alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
              width="1920"
              height="2193"
            />
            <div className="card__content | flow">
              <div className="card__content--container | flow">
                <h2 className="card__title">
                  🌐
                  <br />
                  Open Source
                </h2>
                <p className="card__description">
                  You will dive into open source because Open-Source has become
                  the de facto way to build software — not only in tech, but
                  across diverse industries. As companies use open source code
                  to build their own commercial products and services, they also
                  see the strategic value of contributing back to those
                  projects.
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
            <small className="profile-user-handle">
              Department of Mathematics
            </small>
            <p>
              "Data scientists are analytical experts who utilize their skills
              in both technology and social science to find trends and manage
              data. They use industry knowledge, contextual understanding,
              skepticism of existing assumptions - to uncover solutions to
              business challenges"
            </p>
          </article>

          <article className="profile">
            <div className="profile-image">
              <img src={kirti} alt="Profile" />
            </div>
            <h2 className="profile-username">Dr. Kirti Avishek</h2>
            <small className="profile-user-handle">
              Department of Civil and Environmental Science Engineering
            </small>
            <p>
              "The expert at anything was once a beginner. We believe that the
              most valuable asset of a community are the people passionate about
              their field and willing to share their knowledge and experience
              with others - that are true educators who help others grow!"
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default ABT
