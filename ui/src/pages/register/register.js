import { useState } from 'react';
import './style.css';
import $ from 'jquery';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [userName, setUserName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        registiraj(userName, email, password);
    };

    function registiraj(userName, email, password) {
        $.ajax({
            url: "http://localhost:3002/register",
            type: "POST",
            dataType: 'json',
            data: {
                userName: userName,
                email: email,
                password: password
            },
            success: function () {
                window.location.href = '/login';
            },
            error: function () {
                alert('Desila se greska');
            }
        });
    }
    return <div className='register-wrapper'>
        <form action="action_page.php" method="post" onSubmit={handleSubmit}>
            <div className="form-container">
                <label htmlFor="uname"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required
                    onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required
                    onChange={(e) => setRepeatPassword(e.target.value)} />

                <button className='submitButton' type="submit" disabled={password !== repeatPassword} >Register</button>
            </div>
        </form>
    </div>;
};