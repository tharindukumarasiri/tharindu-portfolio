import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaNpm,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
  color?: string
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Github',
    href: 'https://www.github.com/tharindukumarasiri',
    icon: FaGithub,
    color: '#333',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tharindu-kumarasiri/',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/9847510/tharindu-kumarasiri',
    icon: FaStackOverflow,
    color: '#ef8236',
  },
  {
    label: 'NPM',
    href: 'https://www.npmjs.com/~tharindu-k',
    icon: FaNpm,
    color: '#CC3534',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UCLYyAkCIzgtx-eunKh8aMXg',
    icon: FaYoutube,
    color: '#FF0000',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tuff_nut__/',
    icon: FaInstagram,
    color: '#d62976',
  },
]
