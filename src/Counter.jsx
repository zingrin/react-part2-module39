// import { useState } from "react"


// export default function Counter() {
//     const [count, setCount] = useState(0);


//     const handleAdd=()=>{
// const newCount = count + 1;
// setCount(newCount);
//     }
//     const counterStyle = {
//         border: '2px solid yellow'
//     }
//     return (
//         <div style={counterStyle}>
//             <h3>Count:{count}</h3>
//             <button onClick={handleAdd}>Add</button>
//         </div>
//     )
// }
import { useState } from "react";



export default function Amount() {

    const [amount, setAmount] = useState(0);
     const handleAdd = () => {
        const newAmount = amount + 1;
        setAmount(newAmount)
    }
    const amountStyle =
    {
        border: '2px solid pink',
margin:'10px',
borderRadius:'10px',

    }

    return (
        <div style={amountStyle}>
            <h3>Amount:{amount}</h3>
            <button onClick={handleAdd}>Push</button>
        </div>
    )
}