import * as React from 'react';
import { DefaultChatTransport, type ToolUIPart } from 'ai';
import { useChat } from '@ai-sdk/react';

export default function PortfolioChat() {
  const [input, setInput] = React.useState<string>('');

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: 'http://localhost:411/api/chat/portfolio-agent',
    }),
  });

  const handleSubmit = async () => {
    if (!input.trim()) return;

    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto">
          {messages.map((message) => (
            <div key={message.id}>
              {message.parts?.map((part, i) => {
                if (part.type === 'text') {
                  return (
                    <div key={`${message.id}-${i}`}>
                      <strong>{message.role}:</strong> {part.text}
                    </div>
                  );
                }

                if (part.type?.startsWith('tool-')) {
                  // Optional: render tool calls if you use tools
                  const toolPart = part as ToolUIPart;
                  return (
                    <div key={`${message.id}-${i}`}>
                      <div>Tool: {toolPart.type}</div>
                      <pre>{JSON.stringify(toolPart.output, null, 2)}</pre>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-4 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about my portfolio..."
            disabled={status !== 'ready'}
            className="flex-1 border px-3 py-2"
          />
          <button type="submit" disabled={status !== 'ready'}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}