import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="sticky top-0 max-w-[100vw] flex text-center items-center justify-between bg-black-100 text-lg px-10 py-5">
        <div className="hover:text-amber-300 text-gray-300 hover:cursor-pointer ">
          <Link href='/'>ShwetaRoy
          </Link>
        </div>
        <div className="hover:text-amber-300 text-gray-300 hover:cursor-pointer ">
            <Link href='/projects'>
                Projects
            </Link>
        </div>
        {/* <div>
            <Button variant={"ghost"}>Resume</Button>
        </div> */}
    </div>
  )
}

export default Header