# lineformatter README
🚀 A simple VS Code extension to normalize newline characters in your text.

---

## Features

 - 🔁 Collapse two or more consecutive newlines into a single newline
- 🔁 Convert single newlines (`\n`) into double (`\n\n`)
- 💡 Works on selected text or the entire document

---

## Usage

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Search for one of the following:
   - `LineFormatter: Convert Double Newlines to Single`
   - `LineFormatter: Convert Single Newlines to Double`
3. Run the command

📝 The extension will apply the transformation to your selected text. If no text is selected, the entire document is transformed.

---

## Commands

| Command | Description |
|--------|-------------|
| `LineFormatter: Convert Double Newlines to Single` | Collapses sequences of two or more newlines into a single `\n` |
| `LineFormatter: Convert Single Newlines to Double` | Inserts an extra newline, avoiding duplication |

---

## Extension Settings

This extension has no settings. Just use the commands!

---

## License

MIT

---

## 日本語の説明

### 🔧 機能

- 2つ以上連続する改行(`\n\n` など)を1つの `\n` にまとめます
- `\n` を `\n\n` に置換（連続改行は維持）
- テキスト選択時は選択範囲だけ、選択なしならドキュメント全体が対象

### 🧭 使い方

1. コマンドパレット（`Ctrl+Shift+P`）を開く  
2. 「`LineFormatter: Convert Double Newlines to Single`」または「`LineFormatter: Convert Single Newlines to Double`」を実行  
3. 結果を確認！

---

💬 ご意見・改善要望は GitHub にてお待ちしております。