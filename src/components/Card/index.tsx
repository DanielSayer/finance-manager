import "./style.scss"

interface ICardProps {
  position: "center"
  children: React.ReactNode
}

const Card = ({ position, children }: ICardProps) => {
  return <div className={`card ${position}`}>{children}</div>
}

export default Card
