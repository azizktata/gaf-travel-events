// const PAGE_QUERY = defineQuery(`*[
//     _type=="page"][0]{
//       titre,
//       description,
//       team,
//       about,
//       aboutImg,
//       emplacement
//     }`);
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";




    const VOYAGE_ORG_QUERY = defineQuery(`*[
      _type == "post" && type == "voyage-organise"
      ]`);
    const VOYAGE_CART_QUERY = defineQuery(`*[
      _type == "post" && type == "voyage-carte"
      ]`);
    
    const VOYAGE_3_QUERY = defineQuery(`*[
        _type == "post"
      ] | order(_updatedAt desc)[0...3]`);
    
    const HOTEL_QUERY = defineQuery(`*[
      _type == "hotel"
      ]`);

      const HOTEL_QUERY_SLUG = defineQuery(`*[_type == "hotel" && slug.current == $slug][0]`);

      const HOTEL_FITLER_QUERY = (typeFilter: string, destinationFilter: string) =>
        defineQuery(`
          *[_type == "hotel" 
          ${typeFilter ? `&& etoile == ${typeFilter}` : ""}
          ${destinationFilter ? `&& adresse == "${destinationFilter}"` : ""}
          ]
        `);

        const HOTEL_DEST_QUERY = defineQuery(`*[
          _type == "hotel"
          ]{adresse}`);


          const VOYAGE_FILTER_QUERY = (typeFilter: string, destinationFilter: string) =>
            defineQuery(`
               *[_type == "post" 
                ${typeFilter ? `&& type == "${typeFilter}"` : ""}
                ${destinationFilter ? `&& destination == "${destinationFilter}"` : ""}
                ]
            `);

            const VOYAGE_DEST_QUERY = defineQuery(`*[
              _type == "post"
              ]{destination}`);

            const VOYAGE_QUERY_SLUG = defineQuery(`*[_type == "post" && slug.current == $slug][0]`);

            const VISA_QUERY = defineQuery(`*[
              _type == "pageVisa"
              ]`);

      export async function fetchVoyagesOrg() {
        const { data } = await sanityFetch({ query: VOYAGE_ORG_QUERY });
        return data;
      }
      
      export async function fetchVoyagesCart() {
        const { data } = await sanityFetch({ query: VOYAGE_CART_QUERY });
        return data;
      }
      
      export async function fetchVoyages3() {
        const { data } = await sanityFetch({ query: VOYAGE_3_QUERY });
        return data;
      }
      
      export async function fetchHotels() {
        const { data } = await sanityFetch({ query: HOTEL_QUERY });
        return data;
      }
      export async function fetchHotelBySlug(params: { slug: string; }) {
        if (!params || !params.slug) {
            throw new Error("Missing 'slug' parameter");
          }
        const { data } = await sanityFetch({ query: HOTEL_QUERY_SLUG, params});
        return data;
      }

      export async function fetchHotelsByFilterOpions(typeFilter:string, destinationFilter:string) {
        const { data } = await sanityFetch({ query: HOTEL_FITLER_QUERY(typeFilter, destinationFilter) });
        return data;
      }

      export async function fetchNDestOfHotels() {
        const { data } = await sanityFetch({ query: HOTEL_DEST_QUERY });
        return data;
      }
      export async function fetchVoaygesByFilterOpions(typeFilter:string, destinationFilter:string) {
        const { data } = await sanityFetch({ query: VOYAGE_FILTER_QUERY(typeFilter, destinationFilter) });
        return data;
      }

      export async function fetchDestOfVoyages() {
        const { data } = await sanityFetch({ query: VOYAGE_DEST_QUERY });
        return data;
      }

      export async function fetchVoyageBySlug(params: { slug: string; }) {
        if (!params || !params.slug) {
            throw new Error("Missing 'slug' parameter");
          }
        const { data } = await sanityFetch({ query: VOYAGE_QUERY_SLUG, params});
        return data;
      }

      export async function fetchVisa() {
        const { data } = await sanityFetch({ query: VISA_QUERY });
        return data;
      }