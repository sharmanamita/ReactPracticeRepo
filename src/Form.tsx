import React, { useState } from "react";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [tableArr, setTableArr] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  function onsubmit() {
    if (!fname.trim() || !lname.trim()) return; // prevent empty entries

    if (isEdit && currentIndex !== null) {
      // ✅ Update existing entry
      setTableArr((prev) => {
        const newArr = [...prev];
        newArr[currentIndex] = { fname, lname };
        return newArr;
      });
      setIsEdit(false);
      setCurrentIndex(null);
    } else {
      // ✅ Add new entry
      setTableArr((prev) => [...prev, { fname, lname }]);
    }

    // ✅ Clear inputs after submit
    setFname("");
    setLname("");
  }

  function onOperate(action: string, index: number) {
    switch (action) {
      case "edit":
        setFname(tableArr[index].fname);
        setLname(tableArr[index].lname);
        setIsEdit(true);
        setCurrentIndex(index);
        break;

      case "delete":
        setTableArr((prev) => prev.filter((_, i) => i !== index));
        break;

      default:
        return;
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
        />

        <button onClick={onsubmit}>{isEdit ? "Update" : "Submit"}</button>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableArr.length > 0 ? (
              tableArr.map((item, index) => (
                <tr key={index}>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>
                    <button onClick={() => onOperate("edit", index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => onOperate("delete", index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
