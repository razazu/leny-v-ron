# עוגות קונטידור

אתר תדמית לעסק עוגות קונטידור.

## טכנולוגיות

- Next.js 15 (App Router + Static Generation)
- Tailwind CSS 4
- TypeScript
- Hebrew RTL Support

## התקנה

```bash
npm install
npm run dev
```

## פונטים

- **Rubik** - גופן גוף הטקסט
- **Secular One** - כותרות עבריות
- **Karantina** - כותרות אנגליות/מותג

## מבנה פרויקט

```
src/
├── app/
│   ├── layout.tsx      # Root layout + fonts
│   ├── page.tsx        # Homepage
│   └── globals.css     # Styles + CSS vars
└── components/
    └── layout/
        ├── Header.tsx
        └── Footer.tsx
```
