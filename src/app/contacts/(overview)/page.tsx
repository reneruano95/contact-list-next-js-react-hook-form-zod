'use client'

import Contacts from "@/components/contacts/contacts";
import { Box, Container, Skeleton, Text } from "@chakra-ui/react";
import { CreateContact } from "../../../components/buttons";
import { useEffect } from "react";
import { createAgenda, getAgenda } from "@/lib/actions";

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
