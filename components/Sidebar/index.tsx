import {
  Stack,
  Heading,
  Text,
  Button,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'

const Sidebar = () => {
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '24%' }}
      top={{ lg: 0 }}
    >
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack
          variants={stagger}
          spacing={6}
          w="100"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div variants={scaleUp} className={styles.sidebarBox}>
            <MotionHeading
              as="h2"
              size={surNameSize}
              variant="emphasis"
              className={styles.marginTopForce}
              variants={letterSpace}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              marginBottom={2}
            >
              Tharindu
            </MotionHeading>
            <MotionHeading as="h1" size="2xl" variants={fadeInUp}>
              Kumarasiri
            </MotionHeading>

            <MotionHeading
              as="h3"
              size="md"
              variant="emphasis"
              marginBottom={3}
              className={styles.marginTopSmall}
              variants={fadeInUp}
            >
              Software Engineer
            </MotionHeading>

            <MotionBox d="flex" variants={simpleOpacity} marginBottom={5}>
              {SocialMedias.map((socMedia) => (
                <Link
                  variant="description"
                  key={socMedia.label}
                  aria-label={socMedia.label}
                  rel="noreferrer"
                  width={8}
                  href={socMedia.href}
                  target="_blank"
                  _focus={{ boxShadow: 'none' }}
                >
                  <Icon
                    w={6}
                    h={6}
                    as={socMedia.icon}
                    color={socMedia?.color}
                  />
                </Link>
              ))}
            </MotionBox>

            <MotionText
              variant="description"
              fontSize="small"
              paddingX="8"
              variants={fadeInUp}
              maxWidth={{ base: '100%' }}
              marginBottom={5}
              textAlign="center"
              d="flex"
              alignItems="center"
            >
              Hi! I am a Senior Software Engineer that specializes in web and
              mobile development, working remotely from a small but beautiful
              island named Sri Lanka.
            </MotionText>
            <MotionButton
              size="lg"
              variant="outline"
              borderWidth="1px"
              borderRadius="50"
              fontWeight="normal"
              fontSize="sm"
              width="150px"
              variants={simpleOpacity}
              as={'a'}
              href="/Tharindu-kumarasiri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{
                bgGradient: 'linear(to-l,  #8787ef, #bb87ef)',
                borderColor: 'gray.100',
                color: 'white',
              }}
            >
              See my resume
            </MotionButton>
          </motion.div>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
