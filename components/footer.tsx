import Socials from "./Socials"

const Footer = () => {
  return (
    <div className="w-[100vw] flex flex-col text-center items-center justify-center bg-blue-950 text-sm px-2 py-5">
      <Socials/>
      <p className="text-sm text-indigo-400 mt-20 mb-2">Made with love and lots of headscratching by Shweta &copy; 2024</p>

    </div>
  )
}

export default Footer