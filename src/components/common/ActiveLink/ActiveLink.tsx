'use client';

import Link, { LinkProps } from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export const ActiveLink: FC<Props> = ({
  href,
  children,
  className,
  activeClassName = '',
  ...props
}) => {
  const pathname = usePathname();

  const isActive = pathname === href.toString();
  const combinedClassName = clsx(className, { [activeClassName]: isActive });

  return (
    <Link style={{ textDecoration: 'none' }} href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
};
