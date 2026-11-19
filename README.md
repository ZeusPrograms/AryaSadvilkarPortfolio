# Arya Sadvilkar · Portfolio

A single-page portfolio. All text, links and lists live in `content.js`.

## Files

| File | What it does |
|---|---|
| `content.js` | **Edit this.** Your name, text, experience, research, projects, skills, achievements, contact. |
| `assets/photo.jpg` | Your photo. Replace it with a file of the same name, or change `photo` in `content.js`. |
| `index.html` | The page shell. You don't normally need to edit it. |
| `styles.css` | Colours, layout and animations. |
| `app.js` | Builds the page from `content.js`. You don't normally need to edit it. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. Keep it. |

## Common edits

- **Hide a section:** in `content.js`, set `show: false` on that section.
- **Add a project:** copy one `{ title: ..., tags: ..., text: ..., link: "" }` block inside `projects.items` and edit it. Add a comma after the previous item.
- **Remove a project:** delete its block.
- **Add a research paper:** copy a block in `research.items`. Use `link: ""` if there's no link. The paper section appears once you add an item.
- **Change the rotating roles:** edit `person.roles`.
- **Change your email or links:** edit `person.email` and `person.links`.

Keep the quote marks, commas and brackets exactly as they are. If the page goes blank after an edit, a comma or quote is usually the cause. Check the browser console (F12) for the line number.

## Preview locally

Open `index.html` in a browser. Everything works without a server.
