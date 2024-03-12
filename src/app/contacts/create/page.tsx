import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default function Page() {
  return (
    <Container>
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
    </Container>
  );
}
