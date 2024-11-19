import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = async () => {

    return (
        <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Icons.logo className="w-8 h-8" />
                            <span className="text-lg font-medium">
                                Verve
                            </span>
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-8">
                            {/* add navlinks */}
                            {/* <Link href="#" className="hover:text-foreground/80 text-sm">Features</Link> */}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        {(
                            <>
                                <Link href="" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                                    
                                </Link>
                                <Link href="/" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                                    Download Now
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Navbar
