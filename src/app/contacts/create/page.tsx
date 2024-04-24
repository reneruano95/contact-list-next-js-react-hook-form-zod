import Breadcrumbs from "@/components/breadcrumbs";
import Form from "@/components/contacts/create-form";
import CreateAgendaForm from "@/components/create-agenda-form";
import { Box, Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default function Page() {
  return (
    <Container>
      <Box mt={4}>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Contacts", href: "/contacts/" },
            {
              label: "Create Contact",
              href: "/contacts/create",
              active: true,
            },
          ]}
        />
      </Box>
      {/* <CreateAgendaForm /> */}
      <Form />
    </Container>
  );
}
