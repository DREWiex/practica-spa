import { useForm } from "../../hooks/useForm";

export const BrowserForm = ({ setSearch }) => {

    const { handleChange } = useForm();

    const handleSubmit = (ev) => {

        ev.preventDefault();

        setSearch(ev.target.search.value);

        ev.target.search.value = '';

    }; //!HANDLESUBMIT


    return (

        <>

            <h2>Browser</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="search"
                    placeholder="Search a product"
                    onChange={handleChange} />

                <input
                    type="submit"
                    value="Search" />

            </form>

        </>

    );

};