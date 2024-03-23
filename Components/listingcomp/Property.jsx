import React, { useEffect } from 'react';
import { Box, Image, Text, Badge, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Property = ({ property }) => {
  const { name, city, area, price, bedrooms, description, bathrooms, url, key, $id } = property;
  console.log(property.$id)
  //Navigate to /property/id on click

  const router = useRouter();
  return (
    <Box
      key={key}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      mb={8}
      bg="white"
      width={{ base: '100%', md: '100%'}} // Responsive width
      onClick={() => router.push(`/property/${$id}`)}
    >
      <Image
        loading="lazy"
        src={url[0]}
        alt={name}
        objectFit="cover"
        height="200px"
        width="100%"
        mb={4}
      />
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        {name}
      </Text>
      <Stack direction="column" spacing={2} mb={4}>
        <Badge colorScheme="purple" fontSize="lg">
          Price: ${price}
        </Badge>
        <Badge colorScheme="blue" fontSize="lg">
          {`${bedrooms} BR / ${bathrooms} BA`}
        </Badge>
        <Badge colorScheme="green" fontSize="lg">
          Area: {area}
        </Badge>
      </Stack>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {`${city}`}
      </Text>
      <Text fontSize="sm" color="gray.700" overflow="hidden" textOverflow="ellipsis">
        {description}
      </Text>
    </Box>
  );
};

export default Property;
