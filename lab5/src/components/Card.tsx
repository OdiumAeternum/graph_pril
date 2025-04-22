import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type MemeCardProps = {
    img: string;
    title: string;
  };

  const MemeCard: React.FC<MemeCardProps> = ({ img, title }) => {
    const navigate = useNavigate();
    return (
        <Card style={{width: "18rem", margin: "25px"}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button 
                    onClick={(e) => navigate(`/edit/?url=${img}`)}
                    variant="primary"
                >
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MemeCard;