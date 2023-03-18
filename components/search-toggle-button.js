import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  Divider
} from '@chakra-ui/react'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <IconButton
        aria-label="Open search bar"
        icon={<SearchIcon />}
        onClick={handleToggle}
      />
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '5px',
                right: 0,
                left: 0,
                width: '20%',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box
                borderRadius="lg"
                mb={12}
                p={3}
                textAlign="center"
                css={{ backdropFilter: 'blur(10px)' }}
                boxShadow="0px 0px 12px 0px rgba(0,0,0,0.05);"
                style={{ width: '100%' }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    margin: '0 15px',
                    backdropFilter: 'blur(10px)'
                  }}
                />
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  )
}

export default SearchBar
