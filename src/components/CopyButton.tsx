import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";


interface CopyButtonProps {
  value: string;
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative flex items-center ml-1">
      {copied && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-[#323946] text-gray-200 text-sm shadow transition-opacity duration-200 animate-fade-in-out z-10 select-none">
          Copied!
        </span>
      )}
      <button
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        type="button"
        className="flex items-center justify-center w-12 h-12  rounded-lg transition-colors duration-200 hover:bg-[#232b3e] focus:outline-none"
        tabIndex={0}
      >
        <FaRegCopy size={24} className="text-gray-200" />
      </button>
    </div>
  );
}
