import { Link } from '@chakra-ui/next-js';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'


interface BreadcrumbProps {
    label: string;
    href: string;
    active?: boolean;
}

export default function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbProps[];
}) {
    return (
        <>
            <Breadcrumb >
                {breadcrumbs.map((breadcrumb, index) => {
                    return (
                        <BreadcrumbItem
                            key={breadcrumb.href}
                            aria-current={breadcrumb.active}
                            isCurrentPage={breadcrumb.active}
                        >
                            <BreadcrumbLink
                                as={Link}
                                href={breadcrumb.href}
                            >
                                {breadcrumb.label}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb >
        </>
    )
}