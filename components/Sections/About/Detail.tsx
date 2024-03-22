import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReact,
  SiNextDotJs,
  SiTailwindcss,
} from 'react-icons/si'
import ReactIcon from 'components/Misc/ReactJsIcon'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2020

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for {professionalYears}+ years now and
        currently working as a <b>Senior Software Engineer</b> at{' '}
        <Text as="span" variant="emphasis">
          <a
            href="https://www.rhino-partners.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rhino Partners
          </a>
        </Text>
        .
      </Text>
      <Text variant="description">
        Here are a few technologies that are my cup of tea.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon
              as={SiJavascript}
              color="#f0db4f"
              fontSize="2em"
              bgColor={'black'}
            />
            JavaScript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={'#3178C6'} fontSize="2em" />
            TypeScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={ReactIcon} color={'#61DAFB'} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={'#61DAFB'} fontSize="2em" />
            React Native
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={'#000000'} fontSize="2em" />
            NextJS
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiRedux} color={'#764ABC'} fontSize="2em" />
            Redux
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTailwindcss} color={'#06B6D4'} fontSize="2em" />
            Tailwind CSS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiHtml5} color={'#E34F26'} fontSize="2em" />
            HTML
          </ListItem>
        </List>
        {/* <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box> */}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
