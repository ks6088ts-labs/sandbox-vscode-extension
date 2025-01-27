// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { boscarPrompt, translatePrompt } from "./prompts";

// Define the commands that the chatbot can respond to
enum Commands {
  BOSCAR = "boscar",
  TRANSLATION = "translate",
}

// Define the prompt for each command
function getPrompt(command: Commands): string {
  switch (command) {
    case Commands.BOSCAR:
      return boscarPrompt;
    case Commands.TRANSLATION:
      return translatePrompt;
    default:
      return "";
  }
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // define a chat handler
  const handler: vscode.ChatRequestHandler = async (
    request: vscode.ChatRequest,
    context: vscode.ChatContext,
    stream: vscode.ChatResponseStream,
    token: vscode.CancellationToken
  ) => {
    // convert command to enum
    const command = request.command as Commands;

    // get the prompt
    const prompt = getPrompt(command);

    // initialize the messages array with the prompt
    const messages = [vscode.LanguageModelChatMessage.User(prompt)];

    // get all the previous participant messages
    const previousMessages = context.history.filter(
      (h) => h instanceof vscode.ChatResponseTurn
    );

    // add the previous messages to the messages array
    previousMessages.forEach((m) => {
      let fullMessage = "";
      m.response.forEach((r) => {
        const mdPart = r as vscode.ChatResponseMarkdownPart;
        fullMessage += mdPart.value.value;
      });
      messages.push(vscode.LanguageModelChatMessage.Assistant(fullMessage));
    });

    // add in the user's message
    messages.push(vscode.LanguageModelChatMessage.User(request.prompt));

    // send the request
    const chatResponse = await request.model.sendRequest(messages, {}, token);

    // stream the response
    for await (const fragment of chatResponse.text) {
      stream.markdown(fragment);
    }

    return;
  };

  // create participant
  const tutor = vscode.chat.createChatParticipant(
    "ks6088ts.custom-copilot",
    handler
  );

  // add icon to participant
  tutor.iconPath = vscode.Uri.joinPath(context.extensionUri, "assets/icon.jpg");
}

// This method is called when your extension is deactivated
export function deactivate() {}
