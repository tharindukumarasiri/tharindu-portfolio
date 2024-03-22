import { Link } from '@chakra-ui/react'

export type Company = 'Rhino' | 'Singlife' | 'Dynalli' | 'Ustocktrade'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: string
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Rhino: {
    name: 'Rhino Partners',
    longName: 'Rhino Partners',
    subDetail: '(Pte) Ltd',
    url: 'https://www.rhino-partners.com/',
    position: 'Senior Software Engineer',
    duration: 'April 2022 - Present',
    logo: '/worked_at_logos/logo-rhino.png/',
    roles: [
      <>A Singapore based company providing software solutions.</>,
      <>
        Integrated new products and features from design to deployment for{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://app.singlife.com/PBq0X8b8ukb"
          target="_blank"
          rel="noreferrer"
        >
          Singlife with Aviva
        </Link>{' '}
        company’s mobile application. Improved app load time and navigation
        speed by 20%.
      </>,
      <>
        Planned, designed and oversaw Australian based{' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="https://assetfinance.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Asset Finance
        </Link>{' '}
        company’s web portal.
      </>,
      <>
        Redesigned and replaced the existing{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.rhino-partners.com/"
          target="_blank"
          rel="noreferrer"
        >
          Rhino Partners
        </Link>{' '}
        company website up to 60% optimised and 40% faster.
      </>,
    ],
  },
  Singlife: {
    name: 'Singlife with Aviva',
    longName: 'Singlife',
    subDetail: '(Pte) Ltd',
    url: 'https://singlife.com/en',
    position: 'Software Engineer',
    duration: 'April 2020 - December 2023',
    logo: '/worked_at_logos/singlife-logo.png/',
    roles: [
      <>
        Integrated new products and features from design to deployment for
        Singlife Android and IOS mobile applications with React Native. Improved
        app load time and navigation speed by 20%.
      </>,
      <>
        Collaborated with business and product teams to rollout new features
        fast.
      </>,
      <>
        Guided junior developers to learn and adapt best practices, company
        standards and adhere to development life cycles.
      </>,
    ],
  },
  Dynalli: {
    name: 'Dynalli',
    longName: 'Dynalli',
    subDetail: '(Pvt) Ltd',
    url: 'https://dynalli.com/',
    position: 'Software Engineer',
    duration: 'July 2022 - Present',
    logo: '/worked_at_logos/dynalli-logo.png/',
    roles: [
      <>Working as a Freelancer for this Norwegian company.</>,
      <>
        Integrated React.js to currently existing legacy .NET web application
        improving efficiency and speed by 85%.
      </>,
      <>
        Researched and developed a fully functional web-based diagramming tool
        and an email templating tool.
      </>,
    ],
  },
  Ustocktrade: {
    name: 'Ustocktrade',
    longName: 'Ustocktrade',
    subDetail: '(Pvt) Ltd',
    url: 'https://www.linkedin.com/company/ustocktrade/',
    position: 'Software Engineer',
    duration: 'August 2019 - March 2022',
    logo: '/worked_at_logos/ustocktrade-logo.png/',
    roles: [
      <>
        Developed and deployed a fully functional trading mobile application
        with improved aesthetics; 40% faster and 70% smaller app size.
      </>,
      <>E2E test automation with AWS device farm integration.</>,
      <>
        Implemented websites, mobile applications and landing pages from concept
        through deployment.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Rhino,
  Experiences.Singlife,
  Experiences.Dynalli,
  Experiences.Ustocktrade,
]
