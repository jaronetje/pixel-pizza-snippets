// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand("pixel-pizza-snippets.snippets", () => {
		vscode.window.showInformationMessage("you can use ppcom or ppcommand in javascript and typescript files");
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}