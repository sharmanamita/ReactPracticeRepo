import { Parent } from "./parent";

export const GrandParent = () => {
    return <div>GrandParent
        <Parent data={{name: 'namita', age: 28}}/>
    </div>;
}