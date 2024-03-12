
import { Box, Button, Card, CardBody, CardFooter, Container, Heading, Text } from "@chakra-ui/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
                        <Box display="flex" alignItems='center' color='gray'>
                            <FaLocationDot />
                            <Text ps={2}>Adress</Text>
                        </Box>
                        <Box display="flex" alignItems='center' color='gray'>
                            <FaPhone />
                            <Text ps={2}>Phone</Text>
                        </Box>
                        <Box display="flex" alignItems='center' color='gray'>
                            <MdEmail />
                            <Text ps={2}>Email</Text>
                        </Box>
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