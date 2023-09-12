import { useState } from 'react';
import './style.css';
import $ from 'jquery';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            success: function (result) {
                window.location.href = '/login';
            },
            error: function (error) {
                alert('nok')
            }
        });
    }
    return <div className='register-wrapper'>
        <form action="action_page.php" method="post" onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="uname"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required
                    onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required
                    onChange={(e) => setPassword(e.target.value)} />

                <button className='registerButton' type="submit" >Register</button>
            </div>
        </form>
    </div>;
};