import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
  return (
    <>
    <div className="blog__Container" style={{ position:'absolute',top:'139rem'}}>
 
     <div className="blog">
    <div className="blogHeading">Blogs</div>
    <div className="blogContent">Discover the beauty, challenge, and tranquility that come with venturing <br />
into high altitudes.Mountain Adventures" is your ultimate guide</div>
</div>
  
  <div className="cardContainer" style={{ marginTop:"30px"}}>
      <Card style={{ width: '18rem' ,height:'32rem',boxShadow:"0px 0px 16px 0px #000000"}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pikpbOjn749QWJeBi0SepzJFt59UwLRGVw&s" />
      <Card.Body>
      <Card.Title>Cultural Heritage Through 
Design and Creativity</Card.Title>
        <Card.Text style={{color:" #5F5C5C"}}>
        This blog could showcase the world's most 
stunning viewpoints and scenic spots. Each 
post could feature a different viewpoint, 
such as mountaintop lookouts, panoramic 
city vistas, or picturesque coastal cliffs.

        </Card.Text> <br />
        <Button variant="dark" style={{width:"250px"}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,height:'32rem',boxShadow:"0px 0px 16px 0px #000000"}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pikpbOjn749QWJeBi0SepzJFt59UwLRGVw&s" />
      <Card.Body>
      <Card.Title>Scenic Views and Spectacular
Sights</Card.Title>
        <Card.Text  style={{color:" #5F5C5C"}}>
        This blog could showcase the world's most 
stunning viewpoints and scenic spots. Each 
post could feature a different viewpoint, 
such as mountaintop lookouts, panoramic 
city vistas, or picturesque coastal cliffs.

        </Card.Text> <br />
        <Button variant="dark" style={{width:"250px"}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,height:'32rem',boxShadow:"0px 0px 16px 0px #000000"}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pikpbOjn749QWJeBi0SepzJFt59UwLRGVw&s" />
      <Card.Body>
      <Card.Title>Exploring the World Through
Food and Drink</Card.Title>
        <Card.Text  style={{color:" #5F5C5C"}}>
        This blog could showcase the world's most 
stunning viewpoints and scenic spots. Each 
post could feature a different viewpoint, 
such as mountaintop lookouts, panoramic 
city vistas, or picturesque coastal cliffs.

        </Card.Text> <br />
        <Button variant="dark" bg="dark" style={{width:"250px"}}>Read More</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
};

export default Blogs;
