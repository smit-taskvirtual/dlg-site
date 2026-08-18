# ASSETS.md — Image Attribution

All imagery is sourced from **Unsplash** (free to use under the [Unsplash License](https://unsplash.com/license)).
Images are downloaded into `public/images/` so the site is self-contained and works offline.

Images are used **sparingly and intentionally** — no logos, watermarks, distorted faces, or
clichéd corporate handshakes. Photographers should be credited where known via their Unsplash
profile. If a photographer is unknown, the source is the Unsplash CDN.

| File (in `public/images/`) | Usage on site | Creator / Source URL | Platform / License |
| --- | --- | --- | --- |
| `hero-debate.jpg` | Hero section editorial visual — diverse students in discussion | [Unsplash — photo 1522202176988-66273c2fd55f](https://unsplash.com/photos/1522202176988-66273c2fd55f) | Unsplash License |
| `students-study.jpg` | Purpose / challenge section | [Unsplash — photo 1523240795612-9a054b0db644](https://unsplash.com/photos/1523240795612-9a054b0db644) | Unsplash License |
| `lecture-hall.jpg` | Global network / institutional context | [Unsplash — photo 1521119989659-a83eee488004](https://unsplash.com/photos/1521119989659-a83eee488004) | Unsplash License |
| `classroom.jpg` | Insight / education context | [Unsplash — photo 1503676260728-1c00da094a0b](https://unsplash.com/photos/1503676260728-1c00da094a0b) | Unsplash License |
| `meeting.jpg` | Services / collaboration context | [Unsplash — photo 1517048676732-d65bc937f952](https://unsplash.com/photos/1517048676732-d65bc937f952) | Unsplash License |
| `campus.jpg` | University / institutional context | [Unsplash — photo 1524178232363-1fb2b075b655](https://unsplash.com/photos/1524178232363-1fb2b075b655) | Unsplash License |

### How to update an image
Replace the file in `public/images/` and update `src/content.ts` (`images` map) if the file name
changes. Add or adjust the corresponding row above to keep attribution accurate.

> Note: The photographers for these Unsplash CDN IDs could not be independently verified at build
> time. Each is attributed to its Unsplash photo page, which carries the official creator credit.