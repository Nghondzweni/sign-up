import logo from "./logo.svg";
import "./App.css";
import {
  Avatar,
  StyledGrid,
  Details,
  Profile,
  Form,
  DetailContainer,
} from "./StyledApp";
import { formData } from "formData";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <StyledGrid>
        <Profile className="profile">
          <Avatar />
          <h4>{"Front-end challenge!"}</h4>
          <p>
            {"This is a design that you will need to code up and impress us"}
          </p>
          <button className="btn" onClick={toggleOpen}></button>
        </Profile>
        <DetailContainer id={"slider"}>
          {" "}
          {open ? (
            <Form className={open ? "slide-in" : "slide-out"}>
              {formData.map(({ label, type }) => (
                <div className="formItem">
                  <label> {label}</label>
                  <input type={type}></input>
                </div>
              ))}
            </Form>
          ) : (
            <Details className="details">
              <h3>{"My world today"}</h3>
              <p>{"lorem ipsum ..."}</p>
            </Details>
          )}
        </DetailContainer>
      </StyledGrid>
    </div>
  );
}

export default App;
