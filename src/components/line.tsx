import React from 'react';

export default function Line({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <div className="text-yellow text-2xl uppercase  tracking-wider">{text}</div>
      <div className="flex-1 w-full h-1 bg-zinc-600 rounded-full" />
    </div>
  );
}
