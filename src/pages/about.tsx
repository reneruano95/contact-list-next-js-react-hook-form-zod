import Link from "next/link";
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container>
            <p>Template created by Rene Ruano</p>
            <Link href='/'>Back</Link>
        </Container>
    )
}