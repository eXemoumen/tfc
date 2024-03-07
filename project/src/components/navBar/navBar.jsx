import { Link } from "react-router-dom"
import Style from "./component.module.css"
import { useRef, useState, useEffect } from "react"
import Logo from "../logo/logo"
import InstaIcon from "../logo/instaIcon"

export default function Navbar(props) {

  const [stateLoading, setStateLoading] = useState("start")
  const [toggle, setToggle] = useState(false)

  return (
    <>
    <nav className={Style.nav}>
      <Logo></Logo>
      <nav>
        <Link className={Style.Link} to={'/'}>Home</Link>
        <Link className={Style.Link} to={'/challenge'}>Challenge</Link>
        <Link className={Style.Link} to={'/about'}>About us</Link>
        <InstaIcon></InstaIcon>
      </nav>
      <div onClick={() => setToggle(!toggle)} className={`${Style.mobileToggle} ${toggle ? Style.navIn : Style.navOut}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {toggle ?
        <nav className={Style.mobilenav}>
          <Link className={Style.Link} to={'/'}>Home</Link>
          <Link className={Style.Link} to={'/challenge'}>Challenge</Link>
          <Link className={Style.Link} to={'/about'}>About us</Link>
          <InstaIcon></InstaIcon>
        </nav>
        :
        <></>
      }

    </nav>
    <div className={Style.fakeHeight}></div>
    </>

  )
}