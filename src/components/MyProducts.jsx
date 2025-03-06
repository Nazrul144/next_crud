"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
            <CardMedia component='div' className="flex justify-center items-center ml-20">
                <Image src={product.image} alt={product.name} width={300} height={300}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom component="div">
                <h3 className="font-semibold text-orange-600">Brand:{product.name}</h3>
                <h3 className="font-semibold text-orange-600">Price:{product.price}</h3>
                <h3 className="font-semibold text-orange-600">Guarantee:{product.guarantee}</h3>
                <h3 className="font-semibold text-orange-600">Ratting:{product.rating}</h3>
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
