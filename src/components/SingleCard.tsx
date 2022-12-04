type productTypes = {
	title: string;
	price: number;
	desc: string;
  img: string
};

const SingleCard = (props:productTypes) => {
	return (
		<div className="col-12 col-md-6 col-lg-3">
    <div className="card p-3 h-100">
      <figure className="d-flex justify-content-center align-items-center h-50">
      <img src={props.img} className="card-img-top" alt={props.title} />

      </figure>
  <div className="card-body d-flex flex-column justify-content-between h-50">
   <div>
   <h5 className="card-title">{props.title}</h5>
    <h3 className="card-title">{props.price}</h3>
    <p className="card-text">{props.desc.substring(0, 30)}...</p>
   </div>
    <button className="btn btn-primary mt-3">Read More</button>
  </div>
</div>

    </div>
	);
};

export default SingleCard;
