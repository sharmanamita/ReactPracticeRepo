import { useEffect, useState } from "react";


const ReactUseEffect = () => {
    const [userId, setUserId] = useState(1);
    const [userData, setUserData] = useState<{ title?: string } | null>(null);
    setTimeout(() => setUserId(2), 15000);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
        .then(rsp => rsp.json())
        .then(data => setUserData(data));
    }, [userId]);

    return (
        <div className="container">
            <h2>useEffect</h2>
            <p>userId: {userId}</p>
            <p>userData: {userData && userData.title}</p>
        </div>
    );

}

export default ReactUseEffect;