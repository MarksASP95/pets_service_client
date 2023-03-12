import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {

    const pageQueryParam = url.searchParams.get('page') || "";
    const page: string = isNaN(parseInt(pageQueryParam)) ? "" : pageQueryParam;

    try {
        const response = await fetch(`http://localhost:3000/api/v1/pets?page_size=12&page=${page}`);
        
        const data = await response.json();

        return data;
    } catch (error: any) {
        console.log(error.message)
    }

    return {};
}
