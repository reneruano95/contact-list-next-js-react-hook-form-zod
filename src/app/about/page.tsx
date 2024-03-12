import { Metadata } from "next";
import Link from "next/link";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <Container>
            <p>Template created by Rene Ruano</p>
            <Link href='/'>Back</Link>
        </Container>
    )
}