import inquirer from "inquirer";

export const propmtUser = () => {
  return new Promise((resolve) => {
    const answers = inquirer.prompt([
      {
        name: "appName",
        message: "App name:",
        default: "express-app",
      },
      {
        type: "list",
        name: "template",
        message: "Choose a template:",
        choices: [
          "\x1b[97mVanilla\x1b[39m",
          "\x1B[90mBasic\x1B[39m",
          "\x1B[32mEJS\x1B[39m",
          "\x1B[33mApi\x1B[39m",
          "\x1B[35mWebSocket\x1B[39m",
        ],
      },
      {
        type: "list",
        name: "variant",
        message: "Select a variant:",
        choices: ["\x1B[34mTypeScript\x1B[39m", "\x1B[33mJavaScript\x1B[39m"],
      },
    ]);
    resolve(answers);
  });
};
