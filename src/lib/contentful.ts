import * as contentful from "contentful";

// Initialisez le client Contentful
export const contentfulClient = contentful.createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});
