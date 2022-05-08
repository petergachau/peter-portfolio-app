import React ,{useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { NavItems } from '../../data/NavItems'
import { Nav,NavItemstyled, Icons,NavLink,Profile, Logo,MenuIcon, Lineone,NavList, LineTwo, L, ProfileineThree, LineThree,  } from '../Styles/Layout/navbar'
import {FaYoutube,FaTwitter,FaGithub} from 'react-icons/fa'
import { CTA } from '../Styles/Layout/Common'
import seScrollDirection from '../../hooks/useScrollDirection'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
const [menuOpen , setMenuOpen]=useState(false)
const scrollDirection=seScrollDirection('down');

  return (
    <>
    <Nav scrollDirection={scrollDirection}>
    
      {/* <div>
        <a href='#hero-section'>
          <Logo>CODE</Logo>
        </a>
      </div> */}
      <h2>..</h2>
      <MenuIcon menuOpen={menuOpen} onClick={()=> setMenuOpen(!menuOpen)} >
        <Lineone menuOpen={menuOpen}/>
        <LineTwo menuOpen={menuOpen}/>
        <LineThree menuOpen={menuOpen}/>
      
      </MenuIcon>
      <NavList menuOpen={menuOpen}>
       {NavItems.map((navItem, index)=>{
        return(
          <NavItemstyled key={index} index={index} menuOpen={menuOpen} onClick={()=>setMenuOpen(false)}>
          {navItem.isProfile ? (
            <NavLink Link to = '#hero-section'>
              <Profile>
                <img src='./images/peterg.jpeg' alt=''/>
                <span>peter gachau</span>

              </Profile>

            </NavLink>
          ): null}
            {navItem.text ? (
              // < to={navItem.href}>
              <HashLink to={navItem.href}>
              <NavLink >{navItem.text}</NavLink>
          </HashLink>  ):null}
          {
            navItem.hasSocialIcons ? (
           <Icons>
             <NavLink href='£' target='_blanck'>
              <FaYoutube/>
             </NavLink>
             <NavLink href='£' target='_blanck'>
              <FaTwitter/>
             </NavLink>
             <NavLink href='£' target='_blanck'>
              <FaGithub/>
             </NavLink>
           </Icons>
            ):null
          }
          {navItem.hasCTA ? (
            <CTA href='PETERGACHAU CV.pdf' download='PETERGACHAU CV.pdf' >
              get resume
            </CTA>

          ):null}
            
            </NavItemstyled>
        ) 
       })}
      </NavList>
    </Nav>
    </>
  )
}

export default Navbar