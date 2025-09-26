import { Child, type ChildProps } from "./child";

export const Parent = (data: ChildProps) => {
    return( 
    <div>
        <h2>Parent: {data.data.name}{data.data.age}</h2>
        <Child data={data.data} />
    </div>);
}