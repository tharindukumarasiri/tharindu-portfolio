import { memo, useState } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const [allProjectsVisible, setAllProjectsVisible] = useState(false)

  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const onLoadMore = () => setAllProjectsVisible(true)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my work.
      </Heading>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="DnD Diagrams"
            src="./works/react-dnd-screen.png"
            description="A customizable React drag and drop NPM package for building interactive diagrams."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.npmjs.com/package/react-dnd-diagrams"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Rhino Partners"
            description="Company website for Rhino Partners. Personally created the website with Next.js from the scratch when im working with the company. With added headless CMS features."
            src="./works/rhino-project.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.rhino-partners.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Singlife"
            description="Mobile app for Singlife customers. A singapore insurance and investments company. I was incharge of the Digital goods product development team, made using React Native"
            src="./works/singlife-project.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://play.google.com/store/apps/details?id=com.singlife.mobile"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          {allProjectsVisible ? (
            <FeaturedCard
              idx={4}
              title="(AI)Project Time Estimate Calculator"
              description="Estimating time and cost to complete software or construction projects using Artificial Intelligence."
              src="./works/project-estimate.png"
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl="https://projext-estimate-app.netlify.app/"
              isMobile={isMobile}
            />
          ) : null}
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          {allProjectsVisible ? (
            <FeaturedCard
              idx={5}
              title="Ustocktrade"
              description="A trading platform for US stock market. Created the mobile app with React Native from ground up."
              src="./works/ustocktrade.png"
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl="https://ustocktrade.en.aptoide.com/app"
              isMobile={isMobile}
            />
          ) : null}
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          {allProjectsVisible ? (
            <FeaturedCard
              idx={6}
              title="NSBM Student Enrolment System"
              description="The NSBM enrollment system is expected to store and maintain enrollment activities and records for all students in three faculties."
              src="./works/nsbm-project.jpg"
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl="https://github.com/tharindukumarasiri/Student-management-system-for-NSBM-university"
              isMobile={isMobile}
            />
          ) : null}
        </MotionGridItem>
      </MotionGrid>
      {!allProjectsVisible ? (
        <Box w="100%" display="flex" justifyContent="center">
          <Text
            as="button"
            variant="emphasis"
            textAlign="left"
            style={{ alignSelf: 'center' }}
            onClick={onLoadMore}
          >
            Load more...
          </Text>
        </Box>
      ) : null}
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
