import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Input, Textarea, Button, Link, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bg="blue.800" color="white" py={10} textAlign="center">
        <Heading>VC Firm Name</Heading>
        <Text mt={2}>Investing in Tomorrow's Technology Today</Text>
      </Box>

      {/* Portfolio Section */}
      <VStack spacing={8} py={10}>
        <Heading size="lg">Our Portfolio</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <PortfolioCard title="Startup A" description="A revolutionary tech company." imageUrl="https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTUyNjEwMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <PortfolioCard title="Startup B" description="Innovative solutions for healthcare." imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTUyNjEwMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <PortfolioCard title="Startup C" description="Leading the way in renewable energy." imageUrl="https://images.unsplash.com/photo-1515191107209-c28698631303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzdGFydHVwfGVufDB8fHx8MTcxNTI2MTAwOXww&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </VStack>

      {/* About Section */}
      <Box py={10} textAlign="center">
        <Heading size="lg">About Us</Heading>
        <Text mt={4} maxW="container.md" mx="auto">
          VC Firm Name is a venture capital firm focused on empowering entrepreneurs and innovating industries through strategic investments.
        </Text>
      </Box>

      {/* Contact Section */}
      <VStack spacing={4} py={10} as="form">
        <Heading size="lg">Contact Us</Heading>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="blue">Send Message</Button>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="gray.200" py={5} textAlign="center">
        <VStack spacing={2}>
          <Text>Follow Us</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <FaLinkedin />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter />
            </Link>
            <Link href="#" isExternal>
              <FaEnvelope />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

const PortfolioCard = ({ title, description, imageUrl }) => (
  <VStack bg="white" boxShadow="md" padding={4} borderRadius="md" spacing={4}>
    <Image src={imageUrl} borderRadius="md" boxSize="100%" objectFit="cover" />
    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
