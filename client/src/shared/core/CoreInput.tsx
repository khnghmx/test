interface CoreInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const CoreInput = ({ value, placeholder, onChange }: CoreInputProps) => (
  <input
    className="w-full border border-transparent focus:outline-slate-100 px-4 py-2 rounded text-center placeholder:italic placeholder:text-xs"
    value={value}
    placeholder={placeholder}
    onChange={({ target }) => onChange(target.value)}
  />
);
