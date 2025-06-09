// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "lineformatter" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	const disposable = vscode.commands.registerCommand('lineformatter.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World from LineFormatter!');
// 	});

// 	context.subscriptions.push(disposable);
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}


import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const convertDoubleToSingle = vscode.commands.registerCommand(
    'extension.convertDoubleToSingleNewline',
    () => {
      transformText((text) =>
        // CRLF, LF, CR すべてに対応し、2回以上の改行を1回にする
        text.replace(/((\r\n|\r|\n)){2,}/g, '$1') // 最初の改行だけ残す
      );
    }
  );

  const convertSingleToDouble = vscode.commands.registerCommand(
    'extension.convertSingleToDoubleNewline',
    () => {
      // 1つだけの改行を2つに（連続していない場合のみ）
      transformText((text) =>
        text.replace(/(?<!\r?\n)(\r?\n)(?!\r?\n)/g, '$1$1')
      );
    }
  );

  const convertSemicolonToNewline = vscode.commands.registerCommand(
    'extension.convertSemicolonToNewline',
    () => {
      // セミコロンを改行に置換
      transformText((text) => text.replace(/;/g, '\n'));
    }
  );

  context.subscriptions.push(
    convertDoubleToSingle,
    convertSingleToDouble,
    convertSemicolonToNewline,
  );
}

function transformText(transform: (text: string) => string) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage('エディタが開かれていません');
    return;
  }

  const document = editor.document;
  const selection = editor.selection;

  const range = selection.isEmpty
    ? new vscode.Range(0, 0, document.lineCount, 0)
    : new vscode.Range(selection.start, selection.end);

  const text = document.getText(range);
  const newText = transform(text);

  editor.edit((editBuilder) => {
    editBuilder.replace(range, newText);
  });
}

export function deactivate() {}

