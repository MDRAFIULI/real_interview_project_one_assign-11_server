import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-eleven-server.herokuapp.com/manageInventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return [inventories, setInventories];
}
export default useInventories;