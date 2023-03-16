import React from "react";
import "../styles/Signup.css";

function Signup(){

    //useState
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [passwordConfirm,setPasswordConfirm] = React.useState("");
    const [joinNewsletter, setJoinNewsLetter] = React.useState(false);

    //onChange icin fonksiyon
    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event){
        setPasswordConfirm(event.target.value);
    }

    function handleNewsletter(event){
        setJoinNewsLetter(event.target.checked);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("event"+event);
        if(password === passwordConfirm && joinNewsletter === true){
            alert("Successfully registered");
        }
        else{
            alert("Passwords do not match or select newsettler");
        }
        
    }
    return(
        <>
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={email}
                    onChange={handleEmail}
                    name="email"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <input 
                    type="password"
                    placeholder="Password Confirm"
                    className="form--input"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={handleConfirmPassword}
                />

                {/** 
                 * I want to join newsettler
                 * Checkbox
                 * State degiskenleri
                 * onChange fonksiyonu
                 * Input html/jsx bölümü
                 */}

                 <input
                    type="checkbox"
                    name="newsletter"
                    checked={joinNewsletter}
                    onChange={handleNewsletter}
                />
                <label>I want to join newsletter</label>

                <button className="form--submit">Submit</button>
                
            </form>

          </div>
        </>
    )
}
export default Signup;