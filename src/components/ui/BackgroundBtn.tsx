interface BgBtnProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BgBtn({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center ${className}`}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        width: 96,
        height: 48,
      }}
    >
      <svg
        width="96"
        height="48"
        viewBox="0 0 96 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        {/* Your pixel-art border here */}
        <rect x="0" y="0" width="96" height="48" fill="#b7e862" />
        {/* Add more SVG shapes for the border, shadow, etc */}
        <rect
          x="2"
          y="2"
          width="92"
          height="44"
          fill="none"
          stroke="#222"
          strokeWidth="4"
        />
      </svg>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </button>
  );
}
