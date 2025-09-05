
const EventHandling = () => {

    const handleBtnclick = (name: string) => {
        alert(`Button Clicked in parent! Child is ${name}`);
    }

    const handleMouseOver = () => {
        alert('Mouse Over Event Triggered in parent!');
    }

    return (
        <ChildComponent onBtnCLick={(e) => handleBtnclick(e)} onMouserEnter={handleMouseOver}/>
    );
}

export default EventHandling;

type ChildComponentProps = {
    onBtnCLick: (e: string) => void;
    onMouserEnter: () => void;
};

const ChildComponent = (props: ChildComponentProps) => {
    return (
        <>
            <button onClick={() => props.onBtnCLick("Namita")}>Click Me</button>
            <button onMouseEnter={props.onMouserEnter}>Click Me</button>
        </>
    );
}