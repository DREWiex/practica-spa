
export const dummyFetch = async (url) => {

    try {

        const request = await fetch(url, {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        });

        if (request) {

            const response = await request.json();

            return response;

        };

    } catch (error) {

        console.log(error);

        throw new Error('Error al cargar la API');

    };

};