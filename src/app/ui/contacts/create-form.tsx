"use client";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormInputs = {
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
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.full_name}>
        <FormLabel htmlFor="full_name">Full name</FormLabel>
        <Input
          id="full_name"
          placeholder="Full Name"
          {...register("full_name")}
        />
        <FormErrorMessage>
          {errors.full_name && errors.full_name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.address}>
        <FormLabel htmlFor="address">Address</FormLabel>
        <Input
          id="address"
          placeholder="1234 Main St"
          {...register("address")}
        />
        <FormErrorMessage>
          {errors.address && errors.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.phone}>
        <FormLabel htmlFor="phone">Phone</FormLabel>
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
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="Your email" {...register("email")} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <input type="submit" />
    </form>
  );
}
