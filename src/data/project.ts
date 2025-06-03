import { type CollectionEntry, getCollection } from "astro:content";

export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
  return await getCollection("project", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
}

export async function getProjectMeta(id: string): Promise<CollectionEntry<"project"> | undefined> {
  const projectEntries = await getCollection("project", (entry) => {
    return entry.id === id;
  });
  return projectEntries[0];
}



