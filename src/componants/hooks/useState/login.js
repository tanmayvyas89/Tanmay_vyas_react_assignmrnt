import { useState } from "react";


function Login() {

    const [isLogin, setIsLogin] = useState(false)

    function auth() {
        setIsLogin(!isLogin)
    }

    return (
        <>
            <button className={`btn ${isLogin ? 'btn-danger' : 'btn-primary'}`} onClick={auth}>
                {
                    isLogin ? 'LOGOUT' : 'LOGIN'
                }
            </button>
        </>
    )
}
export default Login