import express from 'express';

const app=express();

app.use(express.json());






let products=[
    {
id:1,
name:"Corsair HS45 Headphone",
price:4500,
imageURL:"https://www.purplle.com/magazine/article/budget-friendly-makeup-products-you-gotta-bag-in-2021?srsltid=AU7gw4UzIomV-6Ar3hvRZMxwqn0QgsYEs0MOgfG0bwI31IYN0kZy_IsL",
desc:"A comfortable and highky improving"
    },
{

id:2,
name:"Corsair HS45 Headphone",
price:3500,
imageURL:"https://img.drz.lazcdn.com/static/pk/p/c85bc595052555e897d93c90d51bab17.jpg_720x720q80.jpg",
desc:"A comfortable and highky improving"
    },


];
app.get("/products",(req,res)=>{
    res.json(products);
});

app.post("/products",(req,res)=>{
    const newProduct=req.body;
    products.push(newProduct);
    res.status(201).json(newProduct)
});


app.delete("/products/:id",(req,res)=>{
    const{id}=req.params;
    products=products.filter((product)=>product.id!==parseInt(id));
    res.status(204).send();
});




app.listen(5050,()=>{
    console.log("Server is running on PORT 5050");
});