
export const dummyFetch = async (category, id) => {

    let url;

    if(category) url = `https://dummyjson.com/products/category/${category}`;

    if(id) url = `https://dummyjson.com/products/${id}`;


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