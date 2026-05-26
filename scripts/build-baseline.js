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
  "RESEARCH_ENGINE.md",
  "WEBSITE_ASSETS.md",
  "WEBSITE_ARTIFACTS.md",
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

const researchEngine = fs.readFileSync(path.join(root, "RESEARCH_ENGINE.md"), "utf8");
if (
  !researchEngine.includes("## Jules research engine workflow (revvel-standards)") ||
  !researchEngine.includes("## Completion criteria (normal process gate)")
) {
  throw new Error(
    "Baseline build failed. RESEARCH_ENGINE.md must include Jules workflow and normal process completion criteria sections."
  );
}

console.log("Baseline build passed.");
for (const summary of summaries) {
  console.log(`- ${summary}`);
}
