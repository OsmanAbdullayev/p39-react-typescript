import { Link } from "react-router-dom";

type productTypes = {
	title: string;
	price: number;
	desc: string;
  img: string,
  id: string
};



const SingleCard = (props:productTypes) => {
	return (
		<div className="col-12 col-md-6 col-lg-3">
    <div className="card p-3 h-100">
      <img src={props.img} className="card-img" alt={props.title} />
      
  <div className="card-body d-flex flex-column justify-content-end">
   <div>
   <h5 className="card-title">{props.title}</h5>
    <h3 className="card-title">${props.price}</h3>
    <p className="card-text">{props.desc.substring(0, 30)}...</p>
   </div>
    <Link to={`/products/${props.id}`}><button className="btn btn-dark mt-3">Read More</button></Link>
  </div>
</div>

    </div>
	);
};

export default SingleCard;
