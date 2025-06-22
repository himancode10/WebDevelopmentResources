class ChatInterface {
  constructor() {
    this.messages = [];
    this.msgContainer = document.getElementById("chatMessages");
    this.userInput = document.getElementById("userInput");
    this.sendBtn = document.getElementById("sendButton");

    this.setup();
    this.userInput.addEventListener("input", () => {
      this.userInput.style.height = "auto";
      this.userInput.style.height = this.userInput.scrollHeight + "px";
    });
  }

  setup() {
    this.sendBtn.addEventListener("click", () => this.sendMessage());
    this.userInput.addEventListener("keypress", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
    marked.setOptions({
      highlight: (code, lang) =>
        lang && hljs.getLanguage(lang)
          ? hljs.highlight(code, { language: lang }).value
          : hljs.highlightAuto(code).value,
      breaks: true
    });
  }

  addMessage(content, user = false) {
    const div = document.createElement("div");
    div.className = "message " + (user ? "user-message" : "ai-message");

    if (user) {
      div.textContent = content;
    } else {
      div.innerHTML = marked.parse(content);
      div.querySelectorAll("pre code").forEach(block => hljs.highlightBlock(block));
    }

    this.msgContainer.appendChild(div);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
  }

  showTyping() {
    const t = document.createElement("div");
    t.id = "typingIndicator";
    t.className = "typing-indicator";
    t.textContent = "AI is typing...";
    this.msgContainer.appendChild(t);
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
  }

  removeTyping() {
    document.getElementById("typingIndicator")?.remove();
  }

  async sendMessage() {
    const txt = this.userInput.value.trim();
    if (!txt) return;

    this.addMessage(txt, true);
    this.userInput.value = "";
    this.userInput.style.height = "auto";
    this.messages.push({ role: "user", content: txt });
    this.showTyping();

    try {
      const es = new EventSource("/chat");
      let aiText = "";

      es.onmessage = e => {
        if (e.data === "[DONE]") {
          es.close();
          this.removeTyping();
          this.messages.push({ role: "assistant", content: aiText });
          return;
        }
        const d = JSON.parse(e.data);
        aiText += d.content;

        const last = this.msgContainer.lastElementChild;
        if (last && last.classList.contains("ai-message")) last.remove();

        this.addMessage(aiText);
      };

      es.onerror = err => {
        console.error("SSE error:", err);
        es.close();
        this.removeTyping();
        this.addMessage("❗ Something went wrong. Please try again.");
      };
    } catch (err) {
      console.error("send error:", err);
      this.removeTyping();
      this.addMessage("❗ Couldn't reach the AI service.");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => new ChatInterface());
