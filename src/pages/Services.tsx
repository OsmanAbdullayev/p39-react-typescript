import { useContext } from "react";
import { Link } from "react-router-dom";
import SingleCardServices from "../components/SingleCardServices";
import { ServiceContext } from "../context/ServiceContext";

const Services = () => {
	const [services, setServices]: any = useContext(
		ServiceContext
	);

	return (
		<div className="container">
			<h3 className="text-center mt-3">
				The{" "}
				<span className="fst-italic">
					"useContext"
				</span>{" "}
				hook was used in this section
			</h3>
			<Link to="/addServices" className="btn btn-success">Add Service</Link>
			<div className="row g-3 mt-3 ">
				{services.map((fd: any, i: number) => (
					<SingleCardServices
						id={fd.id}
						title={fd.title}
						price={fd.price}
						desc={fd.description}
						img={fd.image}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
