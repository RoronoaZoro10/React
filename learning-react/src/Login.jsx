
function Login()
{
    return(
        <>
            <div className="loginpage">
                <div >
                    <label className="l-username">Username : </label>
                    <input type="text"></input>
                </div>
                <br></br>
                <div>
                <label className="l-password">Password : </label>
                <input type="password"></input>
                </div>
            </div>
        </>
    )
    
}

export default Login