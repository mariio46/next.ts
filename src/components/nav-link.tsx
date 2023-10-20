'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
    url: string;
    children?: any;
    value?: any;
    className?: string;
}

export default function NavLink({ url, children, className, value, ...props }: NavigationProps) {
    const pathname = usePathname();
    const active = url === pathname;
    return (
        <Link
            href={url}
            {...props}
            className={cn(
                'capitalize text-muted-foreground hover:text-foreground',
                className,
                active ? 'font-semibold text-foreground' : 'font-normal text-muted-foreground',
            )}>
            {value ?? children}
        </Link>
    );
}
