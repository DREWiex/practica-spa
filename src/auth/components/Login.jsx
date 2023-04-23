import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

export const Login = () => {

    const { handleChange } = useForm();

    const { user, setUser } = useContext(UserContext);


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const username = ev.target.username.value;
        const password = ev.target.username.value;

        const loggedUser = {
            id: Date.now(),
            username,
            password,
            auth: true
        };

        setUser(loggedUser);

    };


    return (

        <>

            {
                user.username != undefined && (<Navigate to='/products' />)
            }

            <form
                className="flex"
                onSubmit={handleSubmit}>

                <label htmlFor="username"><strong> Username </strong></label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange} />

                <label htmlFor="password"><strong> Password </strong></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange} />

                <input type="submit" className="submit-login" value="Send" />

            </form>

        </>

    );

};