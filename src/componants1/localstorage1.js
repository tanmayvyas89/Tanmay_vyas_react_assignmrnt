import React from 'react'

function ShowUser() {

    function getUser() {
        const user = localStorage.getItem("user");
        const info = document.querySelector("h1");

        if (user) {
            info.innerHTML = `Welcome, ${user}`
        } else {
            info.innerHTML = "Please Login"
        }
    }

    let input = document.querySelector("input")

    function getValueOfInput() {
        let username = input.value;
        localStorage.setItem("username", username)
        getUser()
    }

    function Logout() {
        localStorage.removeItem("user")
        getUser()
    }

    return (
        <>
            <form>
                <div className='container'>
                    First Name :- <input type="text" />
                    <h1></h1>
                    <button onClick={getValueOfInput}>getUser</button>
                    <button onClick={Logout}>Logout</button>
                </div>
            </form>

        </>
    )
}
getUser();

export default ShowUser