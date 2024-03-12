import { Metadata } from "next";
import Contacts from "@/app/ui/contacts/contacts";

export const metadata: Metadata = {
    title: 'Contacts',
};

export default function Page() {
    return (
        <div>
            Contacts Page
            <Contacts />
        </div>
    )
}