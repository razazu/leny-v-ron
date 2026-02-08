import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "מוצר",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "שם המוצר",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "קטגוריה",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "מחיר",
      type: "number",
    }),
    defineField({
      name: "priceFrom",
      title: "מחיר החל מ-",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "תמונה",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "תגיות",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "ללא שם",
        subtitle: subtitle ? `קטגוריה: ${subtitle}` : "",
        media,
      };
    },
  },
});
