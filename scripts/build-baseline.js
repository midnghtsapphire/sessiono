const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const filesToCheck = [
  "README.md",
  "CHANGELOG.md",
  "DEPLOYMENT_GUIDE.md",
  "GO_TO_MARKET.md",
  "BRAND_GUIDELINES.md",
  "SECURITY.md",
];

const summaries = filesToCheck.map((file) => {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Baseline build failed. Missing ${file}.`);
  }

  const content = fs.readFileSync(fullPath, "utf8").trim();
  if (content.length === 0) {
    throw new Error(`Baseline build failed. ${file} is empty.`);
  }

  return `${file}: ${content.split(/\r?\n/).length} lines`;
});

const deploymentGuide = fs.readFileSync(path.join(root, "DEPLOYMENT_GUIDE.md"), "utf8");
if (!deploymentGuide.includes("Vercel")) {
  throw new Error("Baseline build failed. DEPLOYMENT_GUIDE.md must reference Vercel for Website in Test traceability.");
}

console.log("Baseline build passed.");
for (const summary of summaries) {
  console.log(`- ${summary}`);
}
