import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full px-5 py-7 bg-sky-950 text-white">
        <div><h2>Shweta</h2></div>
        <ul className="flex flex-row justify-between gap-5">
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Projects</li>
            <li>Others</li>
        </ul>
        <div>
            <Button>Resume</Button>
        </div>
    </div>
  )
}

export default Header