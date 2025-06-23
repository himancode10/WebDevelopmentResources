class ChatInterface {
  constructor() {
    this.container = document.getElementById("chatMessages");
    this.input = document.getElementById("userInput");
    this.button = document.getElementById("sendButton");
    this.init();
  }

  init() {
    marked.setOptions({
      highlight: (code, lang) =>
        lang && hljs.getLanguage(lang) ? 
          hljs.highlight(code, { language: lang }).value :
          hljs.highlightAuto(code).value,
      breaks: true
    });

    this.button.addEventListener("click", () => this.send());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.send();
      }
    });

    this.input.addEventListener("input", () => {
      this.input.style.height = "auto";
      this.input.style.height = this.input.scrollHeight + "px";
    });
  }

  appendMessage(text, isUser = false) {
    const msg = document.createElement("div");
    msg.className = "message " + (isUser ? "user-message" : "ai-message");

    if (isUser) {
      msg.textContent = text;
    } else {
      msg.innerHTML = marked.parse(text);
      msg.querySelectorAll("pre code").forEach(block =>
        hljs.highlightBlock(block)
      );
    }

    this.container.appendChild(msg);
    this.container.scrollTop = this.container.scrollHeight;
  }

  showTyping() {
    const t = document.createElement("div");
    t.id = "typingIndicator";
    t.className = "typing-indicator";
    t.textContent = "AI is typing...";
    this.container.appendChild(t);
    this.container.scrollTop = this.container.scrollHeight;
  }

  removeTyping() {
    const t = document.getElementById("typingIndicator");
    if (t) t.remove();
  }

  async send() {
    const text = this.input.value.trim();
    if (!text) return;

    this.appendMessage(text, true);
    this.input.value = ""; this.input.style.height = "auto";
    this.showTyping();

    try {
      const es = new EventSource("/chat");
      let buffer = "";

      es.onmessage = (e) => {
        if (e.data === "[DONE]") {
          es.close();
          this.removeTyping();
          return;
        }
        const data = JSON.parse(e.data);
        buffer += data.content;

        const last = this.container.lastElementChild;
        if (last.classList.contains("ai-message")) last.remove();

        this.appendMessage(buffer);
      };

      es.onerror = (err) => {
        console.error("SSE error:", err);
        es.close();
        this.removeTyping();
        this.appendMessage("❗ Something went wrong. Try again.");
      };
    } catch (err) {
      console.error("Fetch error:", err);
      this.removeTyping();
      this.appendMessage("❗ Couldn't reach the server.");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => new ChatInterface());
