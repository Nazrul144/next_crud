"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Rate } from "antd";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/myProducts/api");
      const data = await res.json();
      setProducts(data.res);
    };
    getData();
  }, []);

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:px-16 mt-12">
        {products?.map((product) => (
          <Card key={product._id} >
            <CardMedia component='div' className="flex justify-center items-center ml-24">
                <Image src={product.image} alt={product.name} width={300} height={300}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom component="div">
                <h3 className=" "><span className="font-extrabold">Brand: </span>{product.name}</h3>
                <h3 className=" "><span className="font-extrabold">Price:</span>{product.price}</h3>
                <h3 className=" "> <span className="font-extrabold">Features: </span>{product.features?.map((feature, index)=>(
                    <li key={index}>{feature}</li>
                ))}</h3>
                <h3 className=" "><span className="font-extrabold">Guarantee: </span>{product.guarantee}</h3>
                <Rate allowHalf value={product.rating}/>
              </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
              <Button size="small">Update</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
