import { useState } from "react";

export const State = () => {
    // useState is always used when variable is changing its value
    // without state react doesnot re-render the component or 
    // does not reflect the changes in the UI
    // it needds useState hook to do so
    
    const [count, setCount] = useState<number>(0);
    console.log("Parent is rendered!")
    const handleBtnClick = () => {
        setCount(count + 1);
    }
    
    return (<>
        <strong>{count}</strong>
        <button onClick={handleBtnClick}>Increment</button>
        <ChildComponent /> {/* 
            Child component will re-render when parent re-renders due to state
            but sibling compoenents will not re-render
        */}
    </>);
}

const ChildComponent = () => {
    console.log("Child is rendered!")
    return <div>Child Component</div>
}