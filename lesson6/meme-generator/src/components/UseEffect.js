import React from "react";

export default function UseEffect() {

    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);


    console.log("component rendered");
    // useEffect, bir React bileşenindeki state veya props değerlerinde 
    //herhangi bir değişiklik olduğunda tetiklenen bir fonksiyondur. 
    //Bu, örneğin, bir kullanıcının bir formu göndermesi veya 
    //bir API çağrısı yapması gibi bir olay sonrasında bir şeyler yapmak için kullanılabilir.

    // Hooks -> UseState, UseEffect
    // Class Component -> Lifecycle methods

    //side effects
    // fetch -> get user
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))

    React.useEffect(function(){
        console.log("use effect executed");
        // api request
        // fetch -> get user
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [count])
    /*
    React.useEffect(() => {

    }
    )*/


    return (
        <>
            <div>
                <h2>The count is {count}</h2>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            </div>
        </>
    )
}