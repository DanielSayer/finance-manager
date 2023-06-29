import "./style.scss"

interface IButtonProps {
  children?: React.ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "tertiary" | "round"
  size?: "small" | "medium" | "large"
  isDisabled?: boolean
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  type,
  variant,
  size,
  isDisabled,
  onClick,
}): React.ReactElement => {
  return (
    <button
      className={`${variant} ${size} ${className} ${type}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
