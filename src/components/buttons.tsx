"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, useToast } from "@chakra-ui/react";
import {
  RiDeleteBin5Fill,
  RiFileEditFill,
  RiFileAddFill,
} from "react-icons/ri";
import { deleteContact, getAllContacts } from "../lib/actions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function CreateContact() {
  return (
    <Link href="/contacts/create">
      <Button
        rightIcon={<RiFileAddFill />}
        variant="solid"
        colorScheme="gray"
        size={"sm"}
      >
        Create Contact
      </Button>
    </Link>
  );
}

export function EditContact({ id }: { id: string }) {
  return (
    <Link href={`/contacts/edit/${id}`}>
      <Button variant="solid" colorScheme="gray" size={"sm"}>
        <RiFileEditFill />
      </Button>
    </Link>
  );
}

export function DeleteContact({
  id,
  contact,
}: {
  id: string;
  contact: string;
}) {
  const toast = useToast();

  const { refetch } = useQuery({
    queryKey: [contact],
    queryFn: () => getAllContacts(),
  });

  const mutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      refetch();
      toast({
        position: "bottom-right",
        title: "Success",
        description: "Contact deleted",
        status: "success",
        isClosable: true,
        duration: 5000,
      });
    },
    onError: (error) => {
      console.error(error);
      toast({
        position: "bottom-right",
        title: "Error",
        description: "Failed to delete contact",
        status: "error",
        isClosable: true,
        duration: 5000,
      });
    },
  });

  const handleDelete = async () => {
    mutation.mutateAsync(id);
  };

  return (
    <Button
      variant="solid"
      colorScheme="red"
      size={"sm"}
      onClick={handleDelete}
    >
      <RiDeleteBin5Fill />
    </Button>
  );
}
