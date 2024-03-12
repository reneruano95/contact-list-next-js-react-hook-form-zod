import { Box, Button, Card, CardBody, CardFooter, Container, Heading, Text } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

export default function Contacts() {
    return (
        <div>
            <Container>
                <Card
                    direction='row'
                    overflow='hiddens'
                    variant='outline'
                >
                    <Box bg='gray' w='20%' m={2} color='white'></Box>
                    <CardBody p={3}>
                        <Heading size='md'>Full Name</Heading>
                        <Text><FaLocationDot /> Adress</Text>
                        <Text>Phone</Text>
                        <Text>Email</Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            +
                        </Button>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    )
}