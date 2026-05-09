/**
 * Merges *.json into resume-data.js so index.html works when opened via file://.
 */
const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "..");
const read = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
const manifest = read("data.json");
const f = manifest.files;
const bundle = {
    meta: read(f.meta),
    summary: read(f.summary),
    skills: read(f.skills),
    portfolioSection: read(f.portfolioSection),
    experience: read(f.experience),
    education: read(f.education),
    certifications: read(f.certifications),
};
const body =
    "/** Bundled snapshot for file:// (fetch blocked). Regenerate: `node src/company-and-projects/scripts/build-resume-bundle.js` */\n" +
    "window.__RESUME_BUNDLE__ = " +
    JSON.stringify(bundle, null, 2) +
    ";\n";
fs.writeFileSync(path.join(dir, "resume-data.js"), body, "utf8");
console.log("Wrote resume-data.js");
