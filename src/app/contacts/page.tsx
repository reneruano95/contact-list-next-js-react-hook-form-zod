import { Metadata } from "next";
import Contacts from "@/app/ui/contacts/contacts";
import { Text } from "@chakra-ui/react";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export const metadata: Metadata = {
    title: 'Contacts',
};

export default function Page() {
    return (
        <div>
            <Text fontSize='4xl' textAlign='center'>
                Contacts Page
            </Text>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Contacts', href: '/contacts/' },
                    {
                        label: 'Create Invoice',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <Contacts />
        </div>
    )
}