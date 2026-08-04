import { useMemo, useState } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import CompanionFab from "./CompanionFab";
import CompanionPanel from "./CompanionPanel";

const MASTRA_API =
  import.meta.env.VITE_MASTRA_API_URL || "http://localhost:4111";

const JOB_MATCH_PLACEHOLDER =
  "Paste a job description here and I'll match Ayomide's best projects…";

const AskAyomide = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Ask about Ayomide's work…");

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${MASTRA_API}/chat/portfolioAgent`,
      }),
    [],
  );

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
  });

  const handleSend = (text) => {
    if (!text.trim()) return;
    sendMessage({ text });
    setInput("");
    setPlaceholder("Ask about Ayomide's work…");
  };

  const handleChipSelect = (label) => {
    if (label === "Match me to a job") {
      setPlaceholder(JOB_MATCH_PLACEHOLDER);
      setOpen(true);
      return;
    }
    handleSend(label);
  };

  const handleRetry = () => {
    clearError?.();
  };

  return (
    <>
      <CompanionFab open={open} onClick={() => setOpen((value) => !value)} />
      <CompanionPanel
        open={open}
        messages={messages}
        status={status}
        error={error}
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        onChipSelect={handleChipSelect}
        onRetry={handleRetry}
        onClose={() => setOpen(false)}
        placeholder={placeholder}
      />
    </>
  );
};

export default AskAyomide;
