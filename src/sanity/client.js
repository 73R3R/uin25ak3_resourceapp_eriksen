import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "gj220yyr",
    dataset: "production",
    apiVersion: "v2025-04-18",
    useCdn: false,
});