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

            <form onSubmit={handleSubmit}>

                <label htmlFor="username"> Username </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange} />

                <label htmlFor="password"> Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange} />

                <input type="submit" value="Send" />

            </form>

        </>

    );

};