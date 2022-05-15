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
import Icon from "assets/images/Icon";

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
        <DetailContainer className={open ? "slide-in" : "slide-out"}>
          {open ? (
            <Form>
              {formData.map(({ label, type, placeholder, options }) => (
                <div className="formItem">
                  <label> {label}</label>
                  <div className="input-group">
                  {options ? (
                    options.map(({ name, value,icon }) => (
                      <label htmlFor={name}>
                        <input
                          className={name}
                          type={type}
                          name={"gender"}
                          value={value}
                        />
                        {<Icon name={icon} />}
                        {name}
                      </label>
                    ))
                  ) : (
                    <input type={type} placeholder={placeholder} />
                  )}
                  </div>
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
