const EventPropagation = () => {
  return (
    <div className="main-div">
      <div
        className="grand-parent-div"
        // onClickCapture={() => console.log("Grand Parent Clicked")} // to do capturing phase
        onClickCapture={() => console.log("Grand Parent Clicked")}// to do capturing phase
        // onClick={() => console.log("Grand Parent Clicked")}
      >
        <div
          className="parent-div"
          onClickCapture={() => console.log("Parent Clicked")}// to do capturing phase
        //   onClick={() => console.log("Parent Clicked")}
        >
          <div
            className="child-div"
            onClickCapture={() => {// to do capturing phase
              console.log("Child Clicked");
            }}
            // onClick={(e) => {
            //   e.stopPropagation();// this will stop the event bubbling to parent and grand parent
            //   console.log("Child Clicked");
            // }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EventPropagation;
