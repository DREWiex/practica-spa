
export const dummyFetch = async (category) => {

    try {

        const request = await fetch(`https://dummyjson.com/products/category/${category}`, {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        });

        if(request.total > 0){

            const response = await request.json();

            return response;

        } else {

            throw{
                ok: false,
                msg: 'No se encontraron productos.'
            };

        };
        
    } catch (error) {

        console.log(error);

        throw new Error('Error al cargar la API');
        
    };

};