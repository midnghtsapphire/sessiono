const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const requiredFiles = [
  "README.md",
  "CHANGELOG.md",
  "DEPLOYMENT_GUIDE.md",
  "GO_TO_MARKET.md",
  "BRAND_GUIDELINES.md",
  "SECURITY.md",
  "package.json",
  "scripts/test-baseline.js",
  "scripts/build-baseline.js",
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error("Baseline test failed. Missing required files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const goToMarket = fs.readFileSync(path.join(root, "GO_TO_MARKET.md"), "utf8");

if (!readme.includes("Website in Test (Vercel)")) {
  console.error("Baseline test failed. README.md must include a Website in Test (Vercel) section.");
  process.exit(1);
}

if (!readme.includes("npm test") || !readme.includes("npm run build")) {
  console.error("Baseline test failed. README.md must document npm test and npm run build usage.");
  process.exit(1);
}

if (!goToMarket.includes("## Sources")) {
  console.error("Baseline test failed. GO_TO_MARKET.md must include sourced research.");
  process.exit(1);
}

console.log("Baseline test passed. Required revvel-standards files and README sections are present.");
