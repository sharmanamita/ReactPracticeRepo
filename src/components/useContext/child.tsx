import { useContext } from "react";
import UserContext from "./context";

export type ChildProps = {
   data: {
        name: string;
        age: number;
    };
};

export const Child = (userData: ChildProps) => {
    const userData1 : {
        name: string;
        age: number;
    } = useContext(UserContext);
    return <div>Child: {userData1.name}, Age: {userData1.age}</div>;
    // return <div>Child: {userData1.data.name}, Age: {userData1.data.age}</div>;
};