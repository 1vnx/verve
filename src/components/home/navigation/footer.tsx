import Icons from "@/components/global/icons"
import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="flex flex-col relative items-center justify-center border-t border-border pt-8 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto">
         <div className=" border-t border-border/40 md:flex md:items-center md:justify-between w-full">
          <p className="text-lg text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} <a href="https://verve.ai/">Verve.</a> All rights
            reserved.
          </p>
          <p className="text-muted-foreground mt-8 md:mt-0">
            Developed by{" "}
            <Link className="underline hover:text-foreground ease-in-out duration-200" href="https://daksh.dev/" target="_blank" rel="noreferrer">
              Daksh
            </Link>
          </p>
        </div>
      </footer>
    );
}

export default Footer
