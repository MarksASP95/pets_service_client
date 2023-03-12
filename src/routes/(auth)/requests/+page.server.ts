import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {

    try {
        const response = await fetch("http://localhost:3000/api/v1/services/requests");
        
        const data = await response.json();

        return data;
    } catch (error: any) {
        console.log(error.message)
    }

    return {};
}
