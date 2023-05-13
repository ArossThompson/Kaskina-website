import './treatmentCard.scss';

export const TreatmentCard = ({
  title,
  img,
  description,
  price,
  time
} : {
  title: string,
  img: string,
  description: string,
  price: string
  time: string
}) => {
  return (
    <div className="card treatment-card" style={{"width": "18rem"}}>
      <img className="card-img-top" src={img} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>Time: {time}</p>
        <p className="price">{price}</p>
      </div>
    </div> 
  )
}