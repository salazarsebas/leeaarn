interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        {content}
        <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
}
