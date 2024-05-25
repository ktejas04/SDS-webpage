import React, { useState, useEffect, useRef } from "react"
import "./Alumini.css"
import defpfp from "/src/components/Alumini/images/default_pfp.png"
import sds from "/src/components/Alumini/images/rsz_3sds.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ParticlesComponent from "../Particlesbg/particles.jsx"
import "./dots.css"

function Card({ member, id }) {
  const { name, role, pfp } = member
  const cardContRef = useRef(null)
  const [flipped, setFlipped] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setFlipped(true)
    }, 900)
  }

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current)
    setFlipped(false)
  }

  useEffect(() => {
    const cardCont = cardContRef.current
    cardCont.addEventListener("mouseenter", handleMouseEnter)
    cardCont.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cardCont.removeEventListener("mouseenter", handleMouseEnter)
      cardCont.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cardContRef} className="card-cont">
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="front">
          <img className="fprofile" src={pfp || defpfp} alt="person" />
          <h2 className="frole">{role}</h2>
        </div>
        <div className="back">
          <ParticlesComponent id={`particles-${id}`} />
          <img className="logo" src={sds} alt="sds" />
          <img className="tprofile" src={pfp || defpfp} alt={name} />
          <h3 className="name">{name}</h3>
          <h4 className="role">{role}</h4>
          <div className="socials">
            <a href="#" className="socialt">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="socialt">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Alumini() {
  const teamMembers = [
    { name: "person1", role: "role", pfp: defpfp },
    { name: "person2", role: "role", pfp: defpfp },
    { name: "person3", role: "role", pfp: defpfp },
    { name: "person4", role: "role", pfp: defpfp },
    { name: "person5", role: "role", pfp: defpfp },
    { name: "person6", role: "role", pfp: defpfp },
    { name: "person7", role: "role", pfp: defpfp },
  ]

  return (
    <div className="body">
      <div className="container">
        <div className="background">
          {[...Array(30)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
        <h1 className="heading">Our Beloved Alumni</h1>
        <div className="item-container">
          {teamMembers.map((member, index) => (
            <Card key={index} member={member} id={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Alumini
