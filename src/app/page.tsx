'use client'

import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <>
      <div>
        <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
          About
        </Link>
      </div>
      <div>
        <Link href='/contacts' color='blue.400' _hover={{ color: 'blue.500' }}>
          Contacts
        </Link>
      </div>
    </>

  );
}
