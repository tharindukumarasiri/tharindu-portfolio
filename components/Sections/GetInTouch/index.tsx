import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  RiPhoneFill,
  RiMailSendFill,
  RiCopyleftLine,
  RiGithubFill,
} from 'react-icons/ri'
import { IoMdHand } from 'react-icons/io'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Tag, TagLabel } from '@chakra-ui/react'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 3,
      duration: 0.5,
      repeat: 10,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const currentYear = new Date().getFullYear()

  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <motion.div
          style={{ display: 'inline-block' }}
          variants={rimuruVariant}
          ref={ref}
          animate={inView ? ['shake', 'jump'] : false}
        >
          <IoMdHand fontSize={'40px'} color="#c98917" />
        </motion.div>
      </Heading>
      <Text variant="description">
        Feel free to message me on any of my social media or shoot me an email.
      </Text>
      <Box display="box" justifyContent="flex-start">
        <Tag
          size="lg"
          bgGradient="linear(to-l, #8787ef, #bb87ef)"
          borderRadius="full"
          marginRight={5}
          marginBottom={5}
        >
          <RiPhoneFill />
          <TagLabel marginLeft={2} as={'a'} href="tel:+94710991877">
            (+94) 71 099 1877
          </TagLabel>
        </Tag>
        <Tag
          size="lg"
          bgGradient="linear(to-l, #8787ef, #bb87ef)"
          borderRadius="full"
          marginRight={5}
          marginBottom={5}
        >
          <RiMailSendFill />
          <TagLabel marginLeft={2} as={'a'} href="mailto:ku.tharindu@gmail.com">
            ku.tharindu@gmail.com
          </TagLabel>
        </Tag>
        <Tag
          size="lg"
          bgGradient="linear(to-l, #8787ef, #bb87ef)"
          borderRadius="full"
          marginRight={5}
          marginBottom={5}
        >
          <FaLinkedin />
          <TagLabel
            marginLeft={2}
            as={'a'}
            href="https://www.linkedin.com/in/tharindu-kumarasiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </TagLabel>
        </Tag>
        <Tag
          size="lg"
          bgGradient="linear(to-l, #8787ef, #bb87ef)"
          borderRadius="full"
          marginRight={5}
          marginBottom={5}
        >
          <FaInstagram />
          <TagLabel
            marginLeft={2}
            as={'a'}
            href="https://www.instagram.com/tuff_nut__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </TagLabel>
        </Tag>
      </Box>
      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/tharindukumarasiri/tharindu-portfolio"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made by <br />
            Tharindu Kumarasiri <Icon as={RiCopyleftLine} /> {currentYear}
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
