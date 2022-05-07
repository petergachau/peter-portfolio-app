import styled , {keyframes, css} from 'styled-components'

 const navItemFade=keyframes`
 from{
     opacity: 0;
     transform: translate(50px);
 }
 to{
    opacity: 1;
    transform: translate(0px);
 }`
 const anime= ({index})=>css`
 animation: ${navItemFade} 0.5s ease forwards ${index/7*0.8}s;
 `

export const Nav=styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 98;
    
    transition: all 1s ease-in-out;
    background-color: rgba(2, 12, 27,0.8);
    top : ${({scrollDirection})=>scrollDirection==='down' ? '-80px' : '0px'}
`;
export const Logo= styled.h3`
    color: beige;
    border-radius: 50%;
`
export const MenuIcon= styled.div`
cursor: pointer;
background-color: ${({theme, menuOpen})=> menuOpen ? 'none' :'blueviolet'} ;
padding: 0.7rem;
transition: ${({theme})=>theme.transition};
border-radius: 5px;
display: none;
position: absolute;
right: 20px;
margin: 0.3rem;

z-index: 999;
@media(max-width:${({theme})=>theme.mobile})  {
    display: inline-block;
    
}
    
`;
export const Lineone= styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        #bdbcba 0%,
        #ddd9d9 100%
    );
    transition: ${({theme})=>theme.transition};
    transform: ${({menuOpen})=> menuOpen ? 'rotate(-45deg) translate(-5px,6px) scaleX(2)' :'none'};
`
export const LineTwo= styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    margin-left: 8px;
    background: linear-gradient(
        135deg,
        #bdbcba 0%,
        #ddd9d9 100%
    );
    opacity: ${({menuOpen})=> menuOpen ? 0: 1} ;
    transition: ${({theme})=>theme.transition};
`
export const LineThree= styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    margin-left: ${({menuOpen})=>menuOpen? 0: '15px'};
    background: linear-gradient(
        135deg,
        #bdbcba 0%,
        #ddd9d9 100%
    );
    transition: ${({theme})=>theme.transition};
    transition: ${({theme})=>theme.transition};
    transform: ${({menuOpen})=> menuOpen ? 'rotate(45deg) translate(-5px,-6px) scaleX(2)' :'none'};
`
export const NavList=styled.ul`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    font-size: 14px;
    flex-wrap: wrap;
    list-style: none;
    @media(max-width:${({theme})=>theme.mobile})  {
    width: 20rem;
    height: 33rem;
    
    background-color: ${({theme})=>theme.colors.lightNavyBlue};
    position: fixed;
    transition: ${({theme})=>theme.transition};
    top:0;
    right: ${({menuOpen})=>menuOpen ? '0' : '-20rem'};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;


    
}

`
export const NavItemstyled=styled.li`
    margin: 0.2rem 0.2rem !important;
   
    &:last-child{
        margin-right: 0;
    }
    @media(max-width:${({theme})=>theme.mobile})  {
    /* opacity: 0; */
    margin: 0.5rem 0rem !important;
    
   ${({menuOpen})=>(menuOpen ? anime : null)}
    
}
    
    
`
    export const NavLink=styled.a`
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    font-size:12px;
   
    &:hover{
        color: ${({theme})=>theme.colors.orange};

      &::after{
        content:'';
        display: block;
       
        width: 100%;
        height: 3px;
        background-color: ${({theme})=>theme.colors.orange};

        transition: all ease-in-out 300ms ;
      }  
    }
    `     
    export const Profile= styled.div`
    display:none;
    @media(max-width:${({theme})=>theme.mobile})  {
    display:flex;
    align-items:center;
    flex-direction:column;
    img{
        height: 8rem;
        width: auto;
        border-radius: 50%;
        display: block;
        margin: 0.5rem 0;
    }
    span{
        margin-left:0.5rem;
    }
    
}
    
    `
    export const Icons=styled.div`
    
    display: none;
    @media(max-width:${({theme})=>theme.mobile})  {
    width: 150px;
    align-items:center;
    display: flex;
    justify-content:space-around;
    margin-bottom:0.8rem ;

    a{
        margin: 0 0.4rem;
        font-size:1.5rem;
    }
    }
    `
       
    
