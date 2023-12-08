'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[];
}

function Navigation({navLinks}: Props) {
    const pathName = usePathname();
    return (<>{navLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
            <Link 
            key={link.label} 
            href={link.href}
            className={`${isActive && "text-blue-600"}`}
            >
                {link.label}
            </Link> 
        )
    })}</>);
}

export default Navigation;