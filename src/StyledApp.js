import styledComponents from "styled-components";
import face from "assets/images/face.svg";
import arrow from "assets/images/arrow.svg";

export const StyledGrid = styledComponents("grid")`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns:1fr 2fr;
    
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

h3{
    margin-bottom:2em;
}
`;

export const Form = styledComponents("form")`
    padding:8em;
    .formItem{
        display:flex;
        width:100%;
        margin:2em 0; 
        label{
            width:20%;
            text-align:start
        }
        input{
            width:70%;
            padding:1.2em;
        }
        
    }

`;


export const DetailContainer = styledComponents("div")`

#slider {
    position: absolute;
    width: 100px;
    height: 100px;
    background: blue;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
}

.slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
}
    
@keyframes slide-in {
    100% { transform: translateY(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateY(0%); }
}
    
@keyframes slide-out {
    0% { transform: translateY(0%); }
    100% { transform: translateY(-100%); }
}

@-webkit-keyframes slide-out {
    0% { -webkit-transform: translateY(0%); }
    100% { -webkit-transform: translateY(-100%); }
}


`