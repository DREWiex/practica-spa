import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const { handleChange } = useForm();


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const username = ev.target.username.value;
        const password = ev.target.username.value;

        const user = {
            id: Date.now(),
            username,
            password,
            auth: true
        };

        

    };


    return (

        <>

            {/* {
                user.username != undefined && (<Navigate to='products' />)
            } */}

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