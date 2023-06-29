import "./style.scss"

interface IInputProps {
  value: string
  placeholder?: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
