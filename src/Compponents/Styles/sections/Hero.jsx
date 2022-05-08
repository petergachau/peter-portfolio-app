import styled ,{keyframes} from 'styled-components'


const bounce= keyframes`
  0%, 20%, 50% ,80% ,100%  {
      transform: translateY(0);
  }
  40%{
    transform: translateY(-30);
  }
  60%{
    transform: translateY(-15);
  }
`

export const HeroSection=styled.section`
    width:45rem;
    height:90vh;
    /* background: linear-gradient(
        135deg,
        rgba(0, 64,77, 0.9) 0%,
        rgba(2,12,27,0.8) 100%,
    ); */
background-size:contain;
/* background-color: darkblue; */
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
/* background-color:  rgba(0, 64,77, 0.9); */
background-image: url('./images/up.svg');

background-repeat: no-repeat;   
text-align: center;
align-items: center;
background-size:contain;
margin-left: 32rem !important;
margin-top: 7rem;
@media screen and (max-width:768px)  {
        /* height:  !important; */
    width: 17rem !important;
    display: flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0rem !important;
margin-top: 8rem;
margin-left: 10rem;
    }
`






    


    export const HeroContent=styled.div`
height: 10rem;
    width: 50rem;
    
    color: #f0edeb;
    text-transform: uppercase;
    
    font-weight:4800px;
    
    font-size: 1rem;
    margin-right: 30rem !important;
    margin-bottom: 8rem;
    @media screen and (max-width:768px)  {
        height: 4rem !important;
    width: 7rem !important;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    font-weight:800px;
    font-size: 0.45rem;
    margin-right: 7rem;
   /* contain:content; */
    margin-bottom: 2rem;
    
    }

    h3{
 font-size: 2rem;
 color: #f510e2;
 margin-top: 1rem;
 @media screen and (max-width:768px)  {
        
    font-family:'Poppins';
    font-weight:800px;
    font-size: 0.98rem;
    margin-right: 15rem !important;
    color:orangered;
    margin-bottom: 2rem;
    
    }
   
    }
    h1{
        @media screen and (max-width:768px)  {
        
        font-family:'Poppins';
        font-weight:800px;
        font-size: 1rem;
        margin-right: 15rem !important;
        
        margin-bottom: 2rem;
        
        }

    }
    `
    export const Arrow= styled.a`

    margin-right: 65%;
    margin-bottom: 5rem;
    @media screen and (max-width:768px)  {
        margin-right: 50rem!important;
        margin-top: 5rem;
    }
    svg{
        font-size: 20px;
        color: white;
        animation:${bounce} 2s infinite 8s;

        &:hover {
            color:orange;
        }
    }
    
    `