import {
  Avatar,
  StyledGrid,
  Details,
  Profile,
  Form,
  DetailContainer,
  ConfirmBtn,
} from "./StyledApp";
import { formData } from "formData";
import { useState } from "react";
import Icon from "assets/images/Icon";

function App() {
  const [open, setOpen] = useState(true);
  const [focus, setFocus] = useState("");
  const toggleOpen = () => {
    setOpen(!open);
  };
  console.log(focus);
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
              {formData.map(({ label, type, placeholder, name, options }) => (
                <div className="formItem">
                  <label
                    style={{ color: `${focus === name ? "#ffa956" : "#000"}` }}
                  >
                    {" "}
                    {label}
                  </label>
                  <div
                    className="input-group"
                    onFocus={(e) => setFocus(e.target.name)}
                  >
                    {options ? (
                      <RadioInput
                        options={options}
                        type={type}
                        groupName={name}
                      />
                    ) : (
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                      />
                    )}
                  </div>
                </div>
              ))}
              <ConfirmBtn className="btn-group">
                <button>{"CANCEL"}</button>
                <button type={"submit"}>{"SAVE"}</button>
              </ConfirmBtn>
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

const RadioInput = ({ options, type, groupName }) => {
  const [active, setActive] = useState("");
  return options.map(({ name, value, icon }) => (
    <label htmlFor={name} className={"radio-label"}>
      <input
        className={"radio-class"}
        type={type}
        name={groupName}
        value={value}
        onClick={() => setActive(name)}
      />
      {<Icon active={name === active} name={icon} />}
      <span>{name}</span>
    </label>
  ));
};

export default App;
