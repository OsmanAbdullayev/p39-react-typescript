import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceContext } from "../context/ServiceContext";

const AddServices = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDesc] = useState("");
	const [services, setServices] = useContext(ServiceContext);

	const updateTitle = (e) => {
		setTitle(e.target.value);
	};

	const updatePrice = (e) => {
		setPrice(e.target.value);
	};

  const updateDesc = (e) => {
		setDesc(e.target.value);
	};

	const navigate = useNavigate();
	const addService = (e) => {
		e.preventDefault();
		setServices((prevServices) => [...prevServices, { title: title, price: price, description: description }]);
		navigate("/services");
	};

	return (
    <form className="container mt-3" onSubmit={addService}>
      <h3 className="text-center">Add Service</h3>
			<div className="mb-3">
				<label className="form-label">Title</label>
				<input onChange={updateTitle} type="text" className="form-control" />
			</div>
			<div className="mb-3">
				<label className="form-label">Price</label>
				<input onChange={updatePrice} type="text" className="form-control" />
			</div>
      <div className="mb-3">
				<label className="form-label">Description</label>
				<input onChange={updateDesc} type="text" className="form-control" />
			</div>

			<button type="submit" className="btn btn-dark">
				Add
			</button>
		</form>
	);
};

export default AddServices;
