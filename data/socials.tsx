import { FaGithub, FaGoodreads, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode, SiPeerlist } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { RiBasketballLine } from "react-icons/ri";

export type SocialMediaProfiles = {
    platform: string,
    url: string,
    icon: React.ReactNode
}

export const socials: SocialMediaProfiles[] = [
    {
        platform: 'email',
        url:'mailto:shwetaroy305@gmail.com',
        icon: <MdEmail />
    },
    {
        platform: 'github',
        url: 'https://github.com/shwetaps605',
        icon: <FaGithub />
    },
    {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/shweta-roy/',
        icon: <FaLinkedin />
    },
    {
        platform: 'twitter',
        url: 'https://x.com/0xshwetaroy',
        icon: <FaXTwitter />
    },
    {
        platform: 'peerlist',
        url: 'https://peerlist.io/shwetaroy',
        icon: <SiPeerlist />
    },
    {
        platform: 'instagram',
        url: 'https://peerlist.io/shwetaroy',
        icon: <FaInstagram />
    },
    {
        platform: 'hashnode',
        url: 'https://devroy.hashnode.dev/',
        icon: <SiHashnode />
    },
    {
        platform: 'dribble',
        url: 'https://dribbble.com/shwetaroy',
        icon: <RiBasketballLine />
    },
    {
        platform: 'goodreads',
        url: 'https://www.goodreads.com/user/show/169854640-shweta-roy',
        icon: <FaGoodreads  />
    }
]