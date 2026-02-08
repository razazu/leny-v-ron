import { client } from "./client";

export interface SanityCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  image?: string;
  products: SanityProduct[];
}

export interface SanityProduct {
  id: string;
  name: string;
  description: string;
  price?: number;
  priceFrom?: number;
  image?: string;
  tags: string[];
}

export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutText: string;
  aboutDescription: string;
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
  phone: string;
  email: string;
  address: string;
  whatsappLink: string;
  instagramLink: string;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0]{
      heroTitle,
      heroSubtitle,
      heroDescription,
      aboutText,
      aboutDescription,
      stat1Number,
      stat1Label,
      stat2Number,
      stat2Label,
      phone,
      email,
      address,
      whatsappLink,
      instagramLink
    }`
  );
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch(
    `*[_type == "category"] | order(order asc) {
      "slug": slug.current,
      name,
      icon,
      description,
      "image": image.asset->url,
      "products": *[_type == "product" && references(^._id)] {
        "id": _id,
        name,
        description,
        price,
        priceFrom,
        "image": image.asset->url,
        tags
      }
    }`
  );
}

export async function getCategoryBySlug(
  slug: string
): Promise<SanityCategory | null> {
  return client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      "slug": slug.current,
      name,
      icon,
      description,
      "image": image.asset->url,
      "products": *[_type == "product" && references(^._id)] {
        "id": _id,
        name,
        description,
        price,
        priceFrom,
        "image": image.asset->url,
        tags
      }
    }`,
    { slug }
  );
}

export async function getAllCategorySlugs(): Promise<string[]> {
  return client.fetch(
    `*[_type == "category"].slug.current`
  );
}
