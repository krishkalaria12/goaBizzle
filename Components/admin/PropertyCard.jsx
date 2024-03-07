import React, { useState } from "react";
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaTimes, FaCheck } from "react-icons/fa";
import ProductModal from "./ProductModal";

const PropertyCard = ({
  name,
  description,
  price,
  bedrooms,
  bathrooms,
  propertyType,
  city,
  email,
  onReject,
  reject,
  productId,
  onAccept,
  section,
  pincode,
  edit = false,
  onEditSubmit,
  area,
  url,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Center>
      <Box
        p="4"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
        color="black"
        w="100%"
        mt="4"
      >
        <Flex>
          <Image
            borderRadius="md"
            alt={name}
            src={url[0]}
            boxSize="250px"
            mr="4"
          />
          <Box flex="1">
            <Flex align="baseline" mb={2}>
              <Badge colorScheme="pink">{propertyType}</Badge>
            </Flex>
            <Text fontSize="xl" fontWeight="bold" color="pink.800" mb={2}>
              {city} &bull; {area}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="teal.800" mb={2}>
              {email}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" lineHeight="short" mb={4}>
              {description}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" mb={2}>
              Price - ₹{price}
            </Text>
            <Flex align="center" mb={2}>
              <Text fontSize="lg" mr={4}>
                <b>Bedrooms:</b> {bedrooms}
              </Text>
              <Text fontSize="lg">
                <b>Bathrooms:</b> {bathrooms}
              </Text>
            </Flex>
            {section === "request" && (
              <Flex justify="center" mb={2}>
                <FaTimes
                  className="text-red-500 text-2xl cursor-pointer mr-2"
                  onClick={() => onReject(productId)}
                />
                <FaCheck
                  className="text-green-500 text-2xl cursor-pointer"
                  onClick={() => onAccept(productId)}
                />
              </Flex>
            )}
            <Flex justify={"center"} gap={"1rem"}>
              {edit && (
                <Flex justify="center" mt={4}>
                  <Button onClick={handleEditClick} colorScheme={"teal"} >
                    Edit
                  </Button>
                </Flex>
              )}
              {reject && (
                <Flex justify="center" mt={4}>
                  <Button onClick={() => onReject(productId)} colorScheme={"red"} >
                    Remove
                  </Button>
                </Flex>
              )}
            </Flex>
          </Box>
        </Flex>
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={{
            name,
            description,
            price,
            bedrooms,
            bathrooms,
            propertyType,
            city,
            email,
            pincode,
            area,
            productId, // Make sure productId is passed
          }}
          onSubmit={onEditSubmit}
        />
      </Box>
    </Center>
  );
};

export default PropertyCard;
