import { Metadata } from "next";
import Contacts from "@/app/ui/contacts/contacts";
import { Text } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: 'Contacts',
};

export default function Page() {
    return (
        <div>
            <Text fontSize='6xl' textAlign='center'>Contacts Page</Text>
            <Contacts />
        </div>
    )
}