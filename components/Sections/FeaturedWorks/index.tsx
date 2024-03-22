import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
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
            title="Project Time Estimate Calculator"
            description="Estimating time and cost to complete software or construction projects using Artificial Intelligence."
            src="./works/project-estimate.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://projext-estimate-app.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="NSBM Student Enrolment System"
            description="The NSBM enrollment system is expected to store and maintain enrollment activities and records for all students in three faculties."
            src="./works/nsbm-project.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/tharindukumarasiri/Student-management-system-for-NSBM-university"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
