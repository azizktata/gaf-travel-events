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
      export async function fetchHotelBySlug(params) {
        if (!params || !params.slug) {
            throw new Error("Missing 'slug' parameter");
          }
        const { data } = await sanityFetch({ query: HOTEL_QUERY_SLUG, params});
        return data;
      }