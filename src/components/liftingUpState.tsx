import { useState } from "react";

const LiftingUpState = () => {
  //Lifting state defination: its like parent-child relationship
  // When multiple components need to share the same state,
  // we lift the state up to their closest common ancestor/parent.

  const [inputValue, setInputValue] = useState("");

  return <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue}/>
  </>
};

export default LiftingUpState;

type InputComponentProps = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputComponent = ({ inputValue, setInputValue }: InputComponentProps) => {
  // we have use this state in displayComponent
  // so we need to lift this state up to LiftingUpState component
  // and then pass it down to both InputComponent and DisplayComponent
  // via props
//   const [inputvalue, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

type DisplayComponentProps = {
  inputValue: string;
};

const DisplayComponent = ({ inputValue }: DisplayComponentProps) => {
    return <>
      <h3>From Input component: {inputValue}</h3>
    </>
}
