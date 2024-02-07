import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { mkdirSync } from "fs";
import { execSync } from "child_process";
import { propmtUser } from "./functions/propmtUser.js";
import { copyFiles } from "./functions/copyFiles.js";
import { cleanString } from "./functions/strings.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createExpressApp = async () => {
  let answers = await propmtUser();
  const appName = answers.appName;
  let template = answers.template;
  let variant = answers.variant;
  const appDir = join(process.cwd(), appName);
  template = cleanString(template);
  variant = cleanString(variant);

  // Create app directory.
  mkdirSync(appDir);

  // Copy template files.
  const templatesDir = join(__dirname, `templates/${template}/${variant}`);
  console.log("Creating project...");
  copyFiles(templatesDir, appDir, appName);

  // Instalar dependecias.
  console.log("Installing dependencies using npm...");
  execSync("npm install", { cwd: appDir, stdio: "inherit" });
  console.log("\x1B[32mDone.\x1B[39m");
  console.log("\x1B[32mNow run:\x1B[39m");
  console.log(`\x1B[36m   cd ${appName}\x1B[39m`);
  console.log("\x1B[36m   npm run dev\x1B[39m");
};

export default createExpressApp;
