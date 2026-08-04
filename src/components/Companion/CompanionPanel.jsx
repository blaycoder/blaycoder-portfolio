import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import CompanionAvatar from "./CompanionAvatar";
import SpeechBubble from "./SpeechBubble";
import SuggestionChips from "./SuggestionChips";
import CompanionInput from "./CompanionInput";
import CompanionStatus from "./CompanionStatus";

function getMessageText(message) {
  if (!message?.parts?.length) return "";
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

const CompanionPanel = ({
  open,
  messages,
  status,
  error,
  input,
  onInputChange,
  onSend,
  onChipSelect,
  onRetry,
  onClose,
  placeholder,
}) => {
  const isLoading = status === "submitted" || status === "streaming";
  const showChips = messages.length === 0 && !isLoading;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close companion"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.section
            role="dialog"
            aria-label="Ask Ayomide companion"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed z-40 flex flex-col border-[3px] border-black bg-brutal-lavender shadow-[8px_8px_0_#000] bottom-0 left-0 right-0 h-[85vh] rounded-t-3xl p-4 md:bottom-24 md:right-6 md:left-auto md:h-[min(32rem,calc(100vh-8rem))] md:w-[min(24rem,calc(100vw-3rem))] md:rounded-2xl"
          >
            <header className="mb-3 flex items-center gap-3 border-b-[3px] border-black pb-3">
              <CompanionAvatar />
              <div>
                <h2 className="text-base font-black uppercase">Ask Ayomide</h2>
                <p className="text-xs font-bold text-black/70">
                  Portfolio guide · grounded answers only
                </p>
              </div>
            </header>

            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pr-1">
              {messages.length === 0 && !error && (
                <SpeechBubble>
                  Hey! I can tell you about Ayomide&apos;s projects, experience,
                  and availability. Pick a prompt or ask anything.
                </SpeechBubble>
              )}

              {messages.map((message) => {
                const text = getMessageText(message);
                if (!text) return null;

                const isUser = message.role === "user";
                return (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && <CompanionAvatar className="size-8 text-xs" />}
                    <div
                      className={`max-w-[85%] ${isUser ? "rounded-2xl border-[3px] border-black bg-brutal-yellow px-4 py-3 text-sm font-medium shadow-[4px_4px_0_#000]" : ""}`}
                    >
                      {isUser ? text : <SpeechBubble>{text}</SpeechBubble>}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-2">
                  <CompanionAvatar className="size-8 text-xs" />
                  <SpeechBubble isLoading />
                </div>
              )}

              <CompanionStatus error={error} onRetry={onRetry} />
            </div>

            <div className="mt-3 space-y-3 border-t-[3px] border-black pt-3">
              <SuggestionChips onSelect={onChipSelect} visible={showChips} />
              <CompanionInput
                value={input}
                onChange={onInputChange}
                onSubmit={onSend}
                disabled={isLoading}
                placeholder={placeholder}
              />
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

CompanionPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.object,
  input: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  onChipSelect: PropTypes.func.isRequired,
  onRetry: PropTypes.func,
  onClose: PropTypes.func,
  placeholder: PropTypes.string,
};

export default CompanionPanel;
