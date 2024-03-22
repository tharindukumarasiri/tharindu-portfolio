import { Box, Image as ChkImage, SkeletonCircle } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { avatarAnimation } from 'config/animations'

const AvatarImages = './tharindu_avatar.png'

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      <MotionBox
        id="TAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={AvatarImages}
          alt="Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
