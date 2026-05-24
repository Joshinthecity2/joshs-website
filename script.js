const terminal = document.querySelector("#terminal-text");

const lines = [
  "$ whoami",
  "josh_in_the_city",
  "$ grep -R \"ethic\" ./work",
  "punk rock / cryptography / open systems",
  "$ cat manifesto.txt",
  "own your keys. support artists. reject gatekeepers.",
  "$ status",
  "still building..."
];

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (!terminal) {
    return;
  }

  const text = lines.slice(0, lineIndex).join("\n");
  const current = lines[lineIndex] || "";
  terminal.textContent = `${text}${text ? "\n" : ""}${current.slice(0, charIndex)}_`;

  if (charIndex < current.length) {
    charIndex += 1;
    window.setTimeout(typeTerminal, 28);
    return;
  }

  if (lineIndex < lines.length - 1) {
    lineIndex += 1;
    charIndex = 0;
    window.setTimeout(typeTerminal, 260);
    return;
  }

  terminal.textContent = lines.join("\n");
}

typeTerminal();
