import {
  readdirSync,
  writeFileSync,
  statSync,
  readFileSync,
  mkdirSync,
  existsSync,
  createReadStream,
  createWriteStream,
} from "fs";
import { join } from "path";

export const copyFiles = (source, target, appName) => {
  const files = readdirSync(source);

  files.forEach((file) => {
    const sourcePath = join(source, file);
    const targetPath = join(target, file);

    if (statSync(sourcePath).isDirectory()) {
      // Create directory if it doesn't exist
      if (!existsSync(targetPath)) {
        mkdirSync(targetPath);
      }
      // Recursively copy contents of the directory
      copyFiles(sourcePath, targetPath, appName);
    } else {
      // Check if the file is a binary file (e.g., image)
      const isBinary = /\.(png|jpg|jpeg|gif|bmp)$/i.test(file);

      if (isBinary) {
        // Use streams for binary files
        const readStream = createReadStream(sourcePath);
        const writeStream = createWriteStream(targetPath);

        readStream.pipe(writeStream);
      } else {
        // Copy file content for non-binary files
        const content = readFileSync(sourcePath, "utf-8");
        // Replace placeholder
        const updatedContent = content.replace(/__APP_NAME__/g, appName);
        writeFileSync(targetPath, updatedContent);
      }
    }
  });
};

const exists = (path) => {
  try {
    statSync(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    } else {
      throw error;
    }
  }
};
