import { useState } from 'react';
import './style.css';
import $ from 'jquery';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        validirajLogin(email, password);
    };

    function validirajLogin(email, password) {
        $.ajax({
            url: "http://localhost:3002/login",
            type: "POST",
            dataType: 'json',
            data: {
                email: email,
                password: password
            },
            success: function (result) {
                localStorage.setItem('loggedInUserEmail', email);
                localStorage.setItem('loggedInUserName', result.name);
                localStorage.setItem('loggedInAsAdmin', result.isAdmin);
                window.location.href = '/nekretnine';
            },
            error: function(error){
                alert(error.responseJSON.message)
            }
        });
    }
    return <div className='login-wrapper'>
        <form action="action_page.php" method="post" onSubmit={handleSubmit}>
            <div className="form-container">
                <label htmlFor="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    onChange={(e) => setPassword(e.target.value)} />

                <button className='btn submitButton' type="submit" >Login</button>
                <h3>Nemaš račun? <a href='/register'>Registruj se</a></h3>
            </div>
        </form>
    </div>;
};