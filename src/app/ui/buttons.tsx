"use client";
import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

import {
  RiDeleteBin5Fill,
  RiFileEditFill,
  RiFileAddFill,
} from "react-icons/ri";
import { deleteContact } from "../lib/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

export function DeleteContact({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteContact,
  });

  const handleDelete = () => {
    mutation.mutate(id, {
      onSuccess: () => queryClient.getQueryData([id]),
    });
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
