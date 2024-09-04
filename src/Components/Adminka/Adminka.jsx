import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  id: yup.string().required("id must start from 11"),
  name: yup.string().required("pls the name of Product"),
  category: yup.string().required("pls the name of Category"),
  description: yup.string().required("Description for product"),
  image: yup.string().required("the url of image: ./src/assets/images/1.jpeg"),
  price: yup.number().required("the price of Product"),
});

const sc =yup.object({
    id: yup.string().required("id ?"),
  });
  

const Adminka = ({ addprod, delprod }) => {
  const {
    register: register,
    reset:reset,
    handleSubmit:handleSubmit,
    formState: { errors: adderrors },
  } = useForm({ resolver: yupResolver(schema) });


  const {
    register: deleteRegister,
    reset: deleteReset,
    handleSubmit: deleteHandleSubmit,
    formState: { errors: deleteerrors },
  } = useForm({ resolver: yupResolver(sc) });

  return (
    <div className="adminka">
       
      <form onSubmit={handleSubmit((data)=>addprod(data, reset))} className="avn">
      <h1>Add a Product</h1>
        <label>Product ID</label>
        <label>Pls Remember the Id and start from 12</label>
        {adderrors.id && <p className="errorrs">{adderrors.id.message}</p>}
        <input {...register("id")} className={adderrors.id ? "er" : ""} type="text" placeholder="Product Id" />


        <label>Product Name</label>
        {adderrors.name && <p className="errorrs">{adderrors.name.message}</p>}
        <input {...register("name")}className={adderrors.name ? "er" : ""} type="text" placeholder="Product Name" />


        <label>Product Category</label>
        {adderrors.category && <p className="errorrs">{adderrors.category.message}</p>}
        <input {...register("category")} className={adderrors.category ? "er" : ""} type="text" placeholder="Product Category" />


        <label>Product Description</label>
        {adderrors.description && <p className="errorrs">{adderrors.description.message}</p>}
        <input {...register("description")} className={adderrors.description ? "er" : ""} type="text" placeholder="Product Description" />


        <label>Product Image</label>
        {adderrors.image && <p className="errorrs">{adderrors.image.message}</p>}
        <input {...register("image")} className={adderrors.image ? "er" : ""} type="text" placeholder="Product Image" />

        <label>Product Price</label>
        {adderrors.price && <p className="errorrs">{adderrors.price.message}</p>}
        <input {...register("price")} className={adderrors.price ? "er" : ""} type="number" placeholder="Product Price" />


        <button className="pbutton">Add a product</button>
      </form>



    <form onSubmit={deleteHandleSubmit((data)=>delprod(data.id, deleteReset ))}className="av">
    <h1>Remove Product</h1>
    <p>You need just write a ID of that product</p>
        <label>Product ID</label>
        {deleteerrors.id && <p className="errorrs">{deleteerrors.id.message}</p>}
        <input {...deleteRegister("id")}  className={deleteerrors.price ? "er" : ""} type="text" placeholder="Product Id" />
        <button className="pbutton">Remove a product</button>
    </form>
    </div>
  );
};

export default Adminka;
