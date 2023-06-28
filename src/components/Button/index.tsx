import "./style.scss"

interface IButtonProps {
  isDisabled?: boolean
  onClick: () => void
}

const Button: React.FC<IButtonProps> = ({
  isDisabled,
  onClick,
}): React.ReactElement => {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      Text
    </button>
  )
}

export default Button
