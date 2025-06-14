import { getCollection } from "astro:content";
import { collectionDateSort } from "@/utils/date";

export async function getAllProjects() {
	const allProjects = await getCollection("project", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	return allProjects.sort(collectionDateSort);
}