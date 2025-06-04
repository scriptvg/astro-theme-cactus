import { getCollection } from "astro:content";
import { collectionDateSort } from "@/utils/date";

export async function getAllMangas() {
	const allMangas = await getCollection("manga", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	return allMangas.sort(collectionDateSort);
}