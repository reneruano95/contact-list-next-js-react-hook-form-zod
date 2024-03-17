import Contacts from "@/app/ui/contacts/contacts";
import { Box, Container, Skeleton, Text } from "@chakra-ui/react";
import { CreateContact } from "../../ui/buttons";

export default function Page() {
  return (
    <div>
      <Container>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          my={4}
          px={4}
        >
          <Text fontSize="4xl" textAlign="center">
            Contacts
          </Text>
          <CreateContact />
        </Box>
        <Contacts />
      </Container>
    </div>
  );
}
