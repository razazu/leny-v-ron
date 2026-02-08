import { NextResponse } from "next/server";

const configYaml = `
backend:
  name: github
  repo: razazu/leny-v-ron
  branch: master
  base_url: https://leny-v-ron.vercel.app
  auth_endpoint: /api/auth

media_folder: 'public/images/products'
public_folder: '/images/products'

collections:
  - name: 'categories'
    label: 'קטגוריות'
    label_singular: 'קטגוריה'
    folder: 'src/data/categories'
    create: true
    slug: '{{slug}}'
    extension: 'json'
    format: 'json'
    fields:
      - { label: 'שם הקטגוריה', name: 'title', widget: 'string', required: true }
      - { label: 'slug (כתובת URL)', name: 'slug', widget: 'string', required: true }
      - { label: 'אייקון (emoji)', name: 'icon', widget: 'string', required: true, default: '🍰' }
      - { label: 'תיאור', name: 'description', widget: 'text', required: true }
      - label: 'תת-קטגוריות'
        name: 'subcategories'
        widget: 'list'
        collapsed: false
        field: { label: 'תת-קטגוריה', name: 'subcategory', widget: 'string' }
      - label: 'מוצרים'
        name: 'products'
        widget: 'list'
        collapsed: false
        fields:
          - { label: 'מזהה מוצר', name: 'id', widget: 'string', required: true }
          - { label: 'שם המוצר', name: 'name', widget: 'string', required: true }
          - { label: 'תיאור', name: 'description', widget: 'text' }
          - { label: 'מחיר קבוע', name: 'price', widget: 'number', required: false, value_type: 'int', min: 0 }
          - { label: 'מחיר החל מ-', name: 'priceFrom', widget: 'number', required: false, value_type: 'int', min: 0 }
          - { label: 'תמונה', name: 'image', widget: 'image', required: false }
          - label: 'תגיות'
            name: 'tags'
            widget: 'select'
            multiple: true
            options: ['חלבי', 'פרווה', 'ללא גלוטן', 'שוקולד', 'גבינה', 'פירות', 'פופולרי']

  - name: 'pages'
    label: 'דפי תוכן'
    label_singular: 'דף'
    files:
      - name: 'homepage'
        label: 'דף הבית'
        file: 'src/content/homepage.json'
        fields:
          - { label: 'כותרת Hero', name: 'heroTitle', widget: 'string' }
          - { label: 'כותרת משנה', name: 'heroSubtitle', widget: 'string' }
          - { label: 'תיאור Hero', name: 'heroDescription', widget: 'text' }
          - label: 'תכונות'
            name: 'features'
            widget: 'list'
            collapsed: false
            fields:
              - { label: 'אייקון (emoji)', name: 'icon', widget: 'string' }
              - { label: 'כותרת', name: 'title', widget: 'string' }
              - { label: 'תיאור', name: 'description', widget: 'text' }

      - name: 'about'
        label: 'דף אודות'
        file: 'src/content/about.json'
        fields:
          - { label: 'כותרת', name: 'title', widget: 'string' }
          - { label: 'סיפור העסק', name: 'story', widget: 'markdown' }
          - { label: 'מספר 1', name: 'stat1Number', widget: 'string' }
          - { label: 'תיאור 1', name: 'stat1Label', widget: 'string' }
          - { label: 'מספר 2', name: 'stat2Number', widget: 'string' }
          - { label: 'תיאור 2', name: 'stat2Label', widget: 'string' }

      - name: 'contact'
        label: 'פרטי התקשרות'
        file: 'src/content/contact.json'
        fields:
          - { label: 'טלפון', name: 'phone', widget: 'string' }
          - { label: 'אימייל', name: 'email', widget: 'string' }
          - { label: 'כתובת', name: 'address', widget: 'text' }
          - { label: 'לינק וואטסאפ', name: 'whatsappLink', widget: 'string' }
          - { label: 'לינק אינסטגרם', name: 'instagramLink', widget: 'string' }
`.trim();

export async function GET() {
  return new NextResponse(configYaml, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8",
    },
  });
}
