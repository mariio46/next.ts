import NavLink from '@/components/nav-link';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
        <header className='relative z-[50] hidden md:block'>
            <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                <nav className='border-b border-border/80 bg-transparent px-6 py-5 backdrop-blur'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-8'>
                            <Link href={'/'}>
                                <Image
                                    src='/vercel.svg'
                                    alt='Vercel Logo'
                                    className='dark:invert'
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </Link>
                            <div className='flex items-center gap-x-4'>
                                <NavLink url='/' value={'home'} />
                                <NavLink url='/dashboard' value={'dashboard'} />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <ThemeToggle />
                            <Link
                                href={'#'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Login
                            </Link>
                            <Link
                                href={'#'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
