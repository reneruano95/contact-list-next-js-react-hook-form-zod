"use client";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "@chakra-ui/next-js";
import { useMutation } from "@tanstack/react-query";
import { createContact } from "@/app/lib/actions";

export type FormInputs = {
  full_name: string;
  address: string;
  phone: number;
  email: string;
};

const FormSchema = z.object({
  full_name: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  phone: z.coerce
    .number({
      invalid_type_error: "Phone must be a number",
    })
    .int()
    .positive(),
  email: z.string().email({ message: "Invalid email address" }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormSchema),
  });

  const create = useMutation({
    mutationFn: createContact,
  });

  const onSubmit = (data: FormInputs) => {
    create.mutate(data, {
      onSuccess: () => {
        console.log("success ");
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.full_name} mb={3}>
        <FormLabel htmlFor="full_name" mb={1}>
          Full name
        </FormLabel>
        <Input
          id="full_name"
          placeholder="Full Name"
          {...register("full_name")}
        />
        <FormErrorMessage>
          {errors.full_name && errors.full_name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.address} mb={3}>
        <FormLabel htmlFor="address" mb={1}>
          Address
        </FormLabel>
        <Input
          id="address"
          placeholder="1234 Main St"
          {...register("address")}
        />
        <FormErrorMessage>
          {errors.address && errors.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.phone} mb={3}>
        <FormLabel htmlFor="phone" mb={1}>
          Phone
        </FormLabel>
        <Input
          id="phone"
          placeholder="Your phone number"
          {...register("phone")}
        />
        <FormErrorMessage>
          {errors.phone && errors.phone.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email" mb={1}>
          Email
        </FormLabel>
        <Input id="email" placeholder="Your email" {...register("email")} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <Box mt={3} textAlign="right">
        <Link href="/contacts">
          <Button type="submit">Cancel</Button>
        </Link>
        <Button colorScheme="teal" type="submit" ms={6}>
          Create Contact
        </Button>
      </Box>
    </form>
  );
}
