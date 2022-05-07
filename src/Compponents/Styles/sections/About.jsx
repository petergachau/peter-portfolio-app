import styled from 'styled-components'


export const AboutStyles=styled.section`
display: flex;
width: 100%;
height: 90vh;
margin: 5rem 1rem 5rem 5rem ;
gap: 1rem;
@media(max-width:760)  {
    margin-top: 10rem !important;
    display: flex !important;
    flex-direction: column !important;
}

`
export const Profile= styled.div`
img{
    height: 10rem;
    width: auto;
    border-radius: 50%;
    display: block;
    margin: 0.5rem 0;
}
@media(max-width:760)  {
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