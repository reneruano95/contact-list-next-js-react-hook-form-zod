"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

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
      <Breadcrumb fontSize="4xl">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <BreadcrumbItem
              key={breadcrumb.href}
              isCurrentPage={breadcrumb.active}
              sx={breadcrumb.active ? {} : { color: "gray" }}
            >
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  );
}
