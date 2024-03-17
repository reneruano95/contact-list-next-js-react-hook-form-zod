"use client";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "@chakra-ui/next-js";
import { useMutation } from "@tanstack/react-query";
import { createContact } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export type FormInputs = {
  id: string;
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
    .positive()
    .refine((value) => value.toString().length >= 10, {
      message: "Phone number must be at most 10 digits long",
    }),
  email: z.string().email({ message: "Invalid email address" }),
});

export default function Form() {
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
        toast({
          position: "bottom-right",
          title: "Success",
          description: "Contact created",
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        router.push("/contacts");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
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

      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
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

      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
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

      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
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
