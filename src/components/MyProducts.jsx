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
            <CardMedia>
                <Image src={product.image} alt={product.name} width={300} height={300}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                Antarctica
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
