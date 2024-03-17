"use client";

import { getContactById } from "@/app/lib/actions";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/contacts/edit-form";
import { Box, Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = useQuery({
    queryKey: ["contacts", id],
    queryFn: () => getContactById(id),
  });

  return (
    <Container>
      <Box mt={4}>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Contacts", href: "/contacts/" },
            {
              label: "Edit Contact",
              href: "/contacts/create",
              active: true,
            },
          ]}
        />
      </Box>
      <EditForm contacts={data} id={id} />
    </Container>
  );
}
