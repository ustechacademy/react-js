import React from "react";


function Form(){
    // firstName
    const [firstName, setFirstName] = React.useState("");
    // email
    const [email,setEmail] = React.useState("");
    // checkbox
    const [isComputer,setIsComputer] = React.useState(false);
    // radio
    const [status,setStatus] = React.useState("");


    function handleFirstName(event){
        console.log(event.target.value);
        setFirstName(event.target.value)
    }

    function handleEmail(event){
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleCheckbox(event){
        console.log(event.target.checked);
        setIsComputer(event.target.checked);

    }

    function handleRadioButton(event){
        console.log(event.target.value);
        setStatus(event.target.value);

        console.log(status);
    }



    return(
        <form>
            <input 
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}
            />

            <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmail}
            />

            <input
                type="checkbox"
                checked={isComputer}
                onChange={handleCheckbox}
            />

            <input 
                type="radio"
                value="fulltime"
                name="fulltime"
                checked={status}
                onChange={handleRadioButton}
            />


        </form>
    )
}
export default Form;