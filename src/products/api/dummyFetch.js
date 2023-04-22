
export const dummyFetch = async (category, id) => {

    let url;

    // si 'category' es 'null', la url es para la pdp; en caso contrario, es para la página de la categoría
    !category ? url = `https://dummyjson.com/products/${id}` : url = `https://dummyjson.com/products/category/${category}`;


    try {

        const request = await fetch(url, {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        });

        if(request){

            const response = await request.json();

            return response;

        };
        
    } catch (error) {

        console.log(error);

        throw new Error('Error al cargar la API');
        
    };

};