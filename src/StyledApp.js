import styledComponents from "styled-components";
import face from "assets/images/face.svg";
import arrow from "assets/images/arrow.svg";
import { keyframes } from "styled-components";

const slideIn = keyframes`
0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
   
`;

const slideOut = keyframes`
    0%{ transform: translateX(-100%); }
    100% { transform: translateX(0%); }
   
`;
export const StyledGrid = styledComponents("div")`
    display: grid;
    width: 85%;
    height:85%;
    margin: 5rem auto;
    
    grid-template-columns:0.8fr 1.2fr;
    overflow-x:hidden;
    .slide-in{
        animation:${slideIn} 1s;
    }
    .slide-out{
        animation:${slideOut} 1s;
    }
`;

export const Avatar = styledComponents("div")`
    width:250px;
    height:250px;
    border-radius:50%;
    background-image:url(${face});
    background-repeat: no-repeat;
    object-fit:cover;
`;

export const Profile = styledComponents("div")`
        background-color:#fdd500;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        z-index:2;
        .btn{
            width:40px;
            height:40px;
            background-image:url(${arrow});
            background-repeat: no-repeat;
            border:none;
            border-radius:50%;
            background-color:black;
            background-position: center;
        }

`;

export const Details = styledComponents("div")`
background-color:#fc9100;
display:flex;
justify-content:center;
align-items:start;
flex-direction:column;
height:100%;
width:100%;
h3{
    margin-bottom:2em;
}

`;

export const Form = styledComponents("form")`

    width: calc( 100% - 10em );
    height: calc( 100% - 10em);
    margin: auto;
    background-color:#fff;
    .formItem{
     &:first-child{
         margin-top:0;
     }
        display:flex;
        width:100%;
        margin:2em 0;
        justify-content:center;
        label{
            width:25%;
            text-align:start;
            display:flex;
            margin:auto 0;
            align-items:center;

        }
        input{
            padding:1.2em;
            background-color:#f5f8f9;
            border:none;
            border-radius:5px;
            &:focus{
                color:#ffa956;
                outline-color: #ffa956;
                border-color: 1px solid #ffa956;
            }
        }
        
        input[type="radio"] {
            position: absolute;
            opacity: 0;
        }
        label svg {
            cursor: pointer;
            margin-right:1em;
        }
        .input-group{
            display:flex;
            width:50%;
            input{
                width:100%;
            }
            .radio-label{
                position:relative;
                width:auto;
                margin-right: 1em;
            }
        }
        
        
    }
`;

export const ConfirmBtn = styledComponents.div`
    padding-top:1em;
    display:flex;
    column-gap:25px;
    justify-content:end;
    margin-right:12.5%;
    button{
        width:125px;
        height:50px;
        border:none;
        border-radius:5px;
        :hover{
            background-color:#55e5c5;
            color:#fff;
        }
    }
`;

export const DetailContainer = styledComponents("div")` 
background-color:#fff;
position:relative;
display:flex;

`;
