import { useCallback, useMemo, useState } from "react";
import BrutalButton from "../brutal/BrutalButton";
import BrutalCard from "../brutal/BrutalCard";

const PAIRS = [
  { id: "react", label: "⚛️", name: "React" },
  { id: "ts", label: "TS", name: "TypeScript" },
  { id: "git", label: "🔀", name: "Git" },
  { id: "node", label: "⬢", name: "Node" },
];

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const buildDeck = () =>
  shuffle(
    PAIRS.flatMap((pair) => [
      { ...pair, uid: `${pair.id}-a` },
      { ...pair, uid: `${pair.id}-b` },
    ]),
  );

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MemoryMatchGame = () => {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const [deck, setDeck] = useState(buildDeck);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [started, setStarted] = useState(!reduced);

  const won = matched.length === PAIRS.length;

  const restart = useCallback(() => {
    setDeck(buildDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setLocked(false);
    setStarted(true);
  }, []);

  const handleFlip = (uid) => {
    if (locked || flipped.includes(uid) || matched.includes(deck.find((c) => c.uid === uid)?.id)) {
      return;
    }

    const next = [...flipped, uid];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [a, b] = next.map((id) => deck.find((c) => c.uid === id));
      if (a.id === b.id) {
        setMatched((m) => [...m, a.id]);
        setFlipped([]);
        setLocked(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 700);
      }
    }
  };

  if (!started) {
    return (
      <BrutalCard className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wide">Mini-game</p>
        <p className="text-base font-semibold">Match the stack pairs!</p>
        <BrutalButton variant="primary" onClick={() => setStarted(true)}>
          Press Start
        </BrutalButton>
      </BrutalCard>
    );
  }

  return (
    <BrutalCard className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold uppercase tracking-wide">Memory Match</p>
        <p className="text-xs font-semibold">Moves: {moves}</p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {deck.map((card) => {
          const isFlipped =
            flipped.includes(card.uid) || matched.includes(card.id);
          return (
            <button
              key={card.uid}
              type="button"
              onClick={() => handleFlip(card.uid)}
              aria-label={isFlipped ? card.name : "Hidden card"}
              className={`flex aspect-square items-center justify-center rounded-xl border-[3px] border-black text-lg font-bold transition-transform duration-200 ${
                isFlipped
                  ? "bg-brutal-yellow shadow-[2px_2px_0_#000]"
                  : "bg-white shadow-[3px_3px_0_#000] hover:-translate-y-0.5"
              }`}
            >
              {isFlipped ? card.label : "?"}
            </button>
          );
        })}
      </div>

      {won && (
        <p className="text-center text-sm font-bold text-black">
          All matched! Nice work.
        </p>
      )}

      <BrutalButton variant="accent" onClick={restart} className="w-full">
        Restart
      </BrutalButton>
    </BrutalCard>
  );
};

export default MemoryMatchGame;
