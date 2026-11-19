# M. Sandy Prastyo — portfolio

Personal site for an iOS engineer in Bali. One page, static, built with [Astro](https://astro.build) and hosted on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type check
```

## Editing content

All text that comes from the résumé lives in `src/data/profile.ts`: experience, skills, education, awards, languages and contact links. Project write-ups are in `src/components/Work.astro`. The résumé PDF is `public/M-Sandy-Prastyo-Resume.pdf`.

## Notes

- The Mora frame demo (`src/components/FrameDemo.astro`) follows the real protocol: 13-byte little-endian header, 169-byte payload per frame, 300 ms pacing, 8 KB media cap, no media broadcast.
- Light and dark themes follow the system and can be switched from the header.
- Fonts are self-hosted (Schibsted Grotesk, IBM Plex Mono) through Fontsource.
