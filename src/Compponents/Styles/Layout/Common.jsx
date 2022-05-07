import styled  from 'styled-components'


export const CTA=styled.a`

background: ${({primary, theme})=>primary? theme.colors.green: 'none'};
color:${({primary, theme})=>primary? theme.colors.white: 'green'};

padding: 10px 20px;
margin: ${({margin})=>margin};
border : 2px solid  ${({theme})=>theme.colors.green};
border-radius: 5px;
font-size: 14px;
font-family: 'Poppins', sans-serif ;
margin-top: 0.7rem !important;
font-weight: 500;
cursor: pointer;
display : inline;
&:hover{
    background: ${({primary, theme})=>primary? theme.colors.orange: 'none'};
    color:${({primary, theme})=>primary? theme.colors.white:theme.colors.orange};
    border : 2px solid  ${({theme})=>theme.colors.orange};

    @media(max-width:${({theme})=>theme.mobile})  {
    /* opacity: 0; */
    margin-top: 0.7rem !important;
    
}

}

` 