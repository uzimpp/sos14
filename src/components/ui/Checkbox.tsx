import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  className?: string;
}

export default function Checkbox({
  checked,
  onChange,
  id,
  className = "",
}: CheckboxProps) {
  return (
    <fieldset
      className={`items-center justify-center transition-all duration-400 ease-smooth ${className}`}
    >
      <label className="inline-flex items-center cursor-pointer ">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <span className="w-(--space-s-m) h-(--space-s-m) min-w-6 min-h-6 pixel-corners-xs bg-white/90 peer-checked:bg-green flex items-center justify-center transition">
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[50%] h-auto"
          >
            <path
              className="transition-colors"
              fill={checked ? "#141414" : "#14141444"}
              d="M0.280029 5.8801H2.92003V8.5201H5.56003V5.8801H8.20003V3.2401H10.84V0.600098H13.48V3.2401H10.84V5.8801H8.20003V8.5201H5.56003V11.1601H2.92003V8.5201H0.280029V5.8801Z"
            />
          </svg>
        </span>
      </label>
    </fieldset>
  );
}
