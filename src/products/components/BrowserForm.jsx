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

            <section className="flex-browser">

                <h2>Products browser</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="search"
                        placeholder="Search here…"
                        onChange={handleChange} />

                    <input
                        type="submit"
                        className="submit-browser"
                        value="Search" />

                </form>

            </section>

        </>

    );

};