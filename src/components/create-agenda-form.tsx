"use client";

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const AgendaSchema = z.object({
    agenda_slug: z
        .string()
        .min(3, { message: "Must be 3 or more characters long" }),
})

export type AgendaSchemaT = z.infer<typeof AgendaSchema>;

export default function CreateAgendaForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AgendaSchemaT>({
        resolver: zodResolver(AgendaSchema),
    });

    const onSubmit = (data: AgendaSchemaT) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.agenda_slug ? true : false} mb={3}>
                    <FormLabel htmlFor="agenda" mb={1}>
                        Agenda Slug
                    </FormLabel>
                    <Input
                        id="agenda"
                        placeholder="Agenda Slug"
                        {...register("agenda_slug")}
                    />
                    <FormErrorMessage>
                        {errors.agenda_slug && errors.agenda_slug.message}
                    </FormErrorMessage>
                </FormControl>
            </form>
        </div>
    )
}