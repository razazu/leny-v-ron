import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "קטגוריה",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "שם",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "אייקון (אימוג׳י)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "תיאור",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "image",
      title: "תמונה",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "סדר תצוגה",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "סדר תצוגה",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "ללא שם",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
