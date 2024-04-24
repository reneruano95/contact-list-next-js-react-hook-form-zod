"use client";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { DeleteContact, EditContact } from "@/components/buttons";
import { useQuery } from "@tanstack/react-query";
import { createAgenda, getAgenda, getAllContacts } from "@/lib/actions";

import { FormInputs } from "./create-form";
import { Key, useEffect } from "react";

interface Contacts extends FormInputs {
  id: string
}

export default function Contacts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: getAllContacts,
  });

  if (isLoading) {
    return (
      <Text fontSize="lg" textAlign={"center"}>
        Loading...
      </Text>
    );
  }

  if (isError) {
    return (
      <Text fontSize="lg" textAlign={"center"}>
        {error.message}
      </Text>
    )
  }

  return (
    <div>
      {data.contacts?.length === 0 && (
        <Text fontSize="lg" textAlign={"center"}>
          No contacts yet. Please add one.
        </Text>
      )}
      {data.contacts?.map((contact: Contacts, index: Key | null | undefined) => (
        <Card
          direction="row"
          overflow="hiddens"
          variant="outline"
          key={index}
          my={4}
        >
          <Box bg="gray" w="20%" m={2} color="white"></Box>
          <CardBody p={3}>
            <Heading size="md">{contact.name}</Heading>
            <Box display="flex" alignItems="center" color="gray">
              <FaLocationDot />
              <Text ps={2}>{contact.address}</Text>
            </Box>
            <Box display="flex" alignItems="center" color="gray">
              <FaPhone />
              <Text ps={2}>{contact.phone}</Text>
            </Box>
            <Box display="flex" alignItems="center" color="gray">
              <MdEmail />
              <Text ps={2}>{contact.email}</Text>
            </Box>
          </CardBody>

          <CardFooter
            flexDirection="column"
            justifyContent="space-around"
            pe={4}
          >
            <EditContact id={contact.id} />
            <DeleteContact id={contact.id} contact="contacts" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
