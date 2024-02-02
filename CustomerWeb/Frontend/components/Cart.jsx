import { useEffect, useLayoutEffect, useState } from "react"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const handle = async () => {
    console.log(`Bearer ${cookies.get('jwt')}`);
    let res = await fetch("http://127.0.0.1:3000/cart", {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
        },
    }).then((data) => data.json())
    return res

    // console.log(res);  // Testing
    
    // if (res.loc)
    //     location.href = res.loc
}

export default () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        (async () => {
            let res = await handle()
            console.log(res);
        })()
    }, [])
    
    return <div>
        <h1>Secret</h1>
        <button>CLick me</button>
    </div>
}