import React from 'react'

export type SocialMediaLinks = {
    [key: string]: string
}

const Socials = () => {

    const socialMediaLinks: SocialMediaLinks = {
        github: 'https://github.com/shwetaps605',
        linkedin: 'https://www.linkedin.com/in/shweta-roy/',
        twitter: 'https://x.com/0xshwetaroy',
        instagram: '',
        peerlist: 'https://peerlist.io/shwetaroy',
        email: 'shwetaroy@gmail.com',
        hashnode: 'https://devroy.hashnode.dev/',
        dribble: 'https://dribbble.com/shwetaroy',
        goodreads: 'https://www.goodreads.com/user/show/169854640-shweta-roy'
    }

    // const getIcons = (key: string) => {

    // }


  return (
    <div>
        <ul>
            {Object.keys(socialMediaLinks).map((key) => (
            <li key={key}>
                <a href={socialMediaLinks[key]} target="_blank" rel="noreferrer">
                {key}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Socials