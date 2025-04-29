import { Button, Card, CardBody, CardFooter, CardHeader, Separator, Heading, Text } from "@chakra-ui/react";
import moment from "moment/moment";

export default function Note({title, description, createdAt}) {
    return (
        <Card variant={"filled"}>
            <CardHeader>
                <Heading size={"md"}>{title} </Heading>
            </CardHeader>
            <Separator borderColor={"gray"} />
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <Separator borderColor={"gray"} />
            <Card.Footer>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</Card.Footer>
        </Card>
    );
}