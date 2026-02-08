import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "הגדרות האתר",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "כותרת ראשית",
      type: "string",
      initialValue: "Leny V Ron",
    }),
    defineField({
      name: "heroSubtitle",
      title: "תת כותרת",
      type: "string",
      initialValue: "עוגות קונטידור מעוצבות",
    }),
    defineField({
      name: "heroDescription",
      title: "תיאור Hero",
      type: "string",
      initialValue: "קו חלוקה ארצי | מחירי סיטונאות | שירות מקצועי לעסקים",
    }),
    defineField({
      name: "aboutText",
      title: "טקסט אודות - פתיחה",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutDescription",
      title: "טקסט אודות - תיאור",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "stat1Number",
      title: "סטטיסטיקה 1 - מספר",
      type: "string",
      initialValue: "100+",
    }),
    defineField({
      name: "stat1Label",
      title: "סטטיסטיקה 1 - תווית",
      type: "string",
      initialValue: "מוצרים בקטלוג",
    }),
    defineField({
      name: "stat2Number",
      title: "סטטיסטיקה 2 - מספר",
      type: "string",
      initialValue: "10+",
    }),
    defineField({
      name: "stat2Label",
      title: "סטטיסטיקה 2 - תווית",
      type: "string",
      initialValue: "שנות ניסיון",
    }),
    defineField({
      name: "phone",
      title: "טלפון",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "אימייל",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "כתובת",
      type: "string",
    }),
    defineField({
      name: "whatsappLink",
      title: "קישור וואטסאפ",
      type: "url",
    }),
    defineField({
      name: "instagramLink",
      title: "קישור אינסטגרם",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "הגדרות האתר" };
    },
  },
});
