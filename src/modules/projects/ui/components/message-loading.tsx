import Image from "next/image";
import { useState, useEffect } from "react";

const ShimmerMessages = () => {
    const messages = [
        "Thinking really hard about doing absolutely nothing...",
        "Convincing the code it’s smarter than it actually is...",
        "Running on optimism and caffeine… mostly caffeine...",
        "Bribing the compiler with false promises...",
        "Polishing things no one will ever notice...",
        "Asking AI for help because I’ve run out of brain cells...",
        "Pretending to know what I’m doing. Again.",
        "Approaching stability… said no build ever.",
        "Almost didn’t crash—that’s improvement, right?",
        "Okay, now it’s serious. (It was serious 10 errors ago.)",
        "One more line of magic that WILL break something...",
        "Rewriting history so the logs look clean...",
        "Convincing the app to behave like it’s production-ready...",
        "Running tests that definitely won’t pass...",
        "Doing the bare minimum with maximum attitude...",
        "Breaking things just to fix them heroically...",
        "Adding ‘temporary’ fixes that will live forever...",
        "Negotiating with the runtime like it owes me money...",
        "Deploying… while questioning my life choices...",
        "Making it work, then making it look like I meant it...",
        "Still loading… because perfection takes time… apparently.",
        "Staring at the screen until the problem fears me...",
        "Turning chaos into functionality—slowly.",
        "Doing that thing where I fix one bug and spawn five more...",
        "Upgrading… mostly my tolerance for pain.",
        "Installing confidence… please wait...",
        "Stabilizing… or pretending to.",

    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-base text-muted-foreground animate-pulse">
        {messages[currentMessageIndex]}
      </span>
    </div>
  );
};

export const MessageLoading = () => {
  return (
    <div className="flex flex-col group px-2 pb-4">
      <div className="flex items-center gap-2 pl-2 mb-2">
        <Image
          src="/logo.svg"
          alt="Pixe"
          width={18}
          height={18}
          className="shrink-0"
        />
        <span className="text-sm font-medium">Pixe</span>
      </div>

      <div className="pl-8 flex flex-col gap-y-4">
        <ShimmerMessages />
      </div>
    </div>
  );
};
