import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "sandeep",
      email: "sandeep@bookclub.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin:true,
    },
    {
      name: "jhon",
      email: "jhon@bookclub.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin:false,
    },
  ],
  products: [
    {
     
      name: "C++",
      catagoery: "Acadmics",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 50,
      rating: 4.5,
      author: "Steve",
      numReviews: 10,
    },

    {
     
      name: "Data Structures",
      catagoery: "Acadmics",
      image: "/images/p2.jpg",
      price: 520,
      countInStock: 12,
      rating: 4.8,
      author: "Armstrong",
      numReviews: 10,
    },

    {
     
      name: "React JS",
      catagoery: "Acadmics",
      image: "/images/p3.jpg",
      price: 350,
      countInStock: 15,
      rating: 4.1,
      author: "Heller",
      numReviews: 10,
    },

    {
     
      name: "Node JS",
      catagoery: "Acadmics",
      image: "/images/p4.png",
      price: 310,
      countInStock: 0,
      rating: 4.2,
      author: "Subero",
      numReviews: 10,
    },

    {
      
      name: "MongoDB",
      catagoery: "Acadmics",
      image: "/images/p5.jpg",
      price: 870,
      countInStock: 50,
      rating: 4.8,
      author: "Apress",
      numReviews: 10,
    },

    {
     
      name: "Web Design",
      catagoery: "Acadmics",
      image: "/images/p6.jpg",
      price: 410,
      countInStock: 0,
      rating: 3.4,
      author: "Jhon",
      numReviews: 10,
    },
  ],
};
export default data;
