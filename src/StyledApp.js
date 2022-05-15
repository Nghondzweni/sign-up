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
    width: 100%;
    height: 100%;
    grid-template-columns:1fr 2fr;
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
h3{
    margin-bottom:2em;
}

`;

export const Form = styledComponents("form")`

input[class="male"]:hover + svg {
    background:green;
}
    padding:8em;
    .formItem{
        display:flex;
        width:100%;
        margin:2em 0;
        justify-content:space-between;
        label{
            width:30%;
            text-align:start;
            display:flex;
            vertical-align:middle;
        }
        input{
            padding:1.2em;
        }
        input[type="radio"] {
            position: absolute;
            opacity: 0;
        }

        label svg {
            cursor: pointer;
        }
        .input-group:{
            display:flex;
            flex-grow:1;
        }
        
        
    }
`;

export const DetailContainer = styledComponents("div")`

position:relative;

`;
