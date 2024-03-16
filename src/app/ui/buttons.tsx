"use client";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

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

export function EditContact() {
  return (
    <Link href="/contacts/edit">
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
  const { refetch } = useQuery({
    queryKey: [contact],
    queryFn: () => getAllContacts(),
  });

  const mutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error(error);
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
