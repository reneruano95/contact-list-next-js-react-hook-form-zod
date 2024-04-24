'use client'

import CreateAgendaForm from '@/components/create-agenda-form';
import { Link } from '@chakra-ui/next-js'
import { Container } from '@chakra-ui/react';



export default function Home() {

  return (
    <>
      <Container>
        <div>

          <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
            About
          </Link>
        </div>
        <div>
          <Link href='/contacts' color='blue.400' _hover={{ color: 'blue.500' }}>
            Contacts
          </Link>

        </div >
      </Container>
    </>

  );
}
