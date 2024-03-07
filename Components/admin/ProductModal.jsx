'use client'
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Select,
  FormErrorMessage,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

const ProductModal = ({ isOpen, onClose, product, onSubmit }) => {
  const [editedProduct, setEditedProduct] = useState({
    ...product, // Spread the product details
    productId: product.productId, // Include productId
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const PropertyTypes = [
    "Villa",
    "Office",
    "Land",
    "House",
    "Apartment",
    "Resale Properties",
    "Portuguese House",
  ];

  const validateForm = () => {
    // Validate pincode, bedrooms, bathrooms, and price
    if (
      !/^\d{6}$/.test(editedProduct.pincode) ||
      isNaN(editedProduct.bedrooms) ||
      isNaN(editedProduct.bathrooms) ||
      isNaN(editedProduct.price)
    ) {
      setError("Invalid input. Please check the entered values.");
      return false;
    }
  
    // Reset error state if all validations pass
    setError(null);
  
    // Add more validation checks as needed
  
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Perform any additional validation or processing here
      onSubmit(editedProduct, product.productId, product.email);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Input fields for editing product details */}
          <Text mb={2}>Name:</Text>
          <Input
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
            mb={4}
          />
          <Text mb={2}>PropertyType:</Text>
          <Select
          name="propertyType"
          value={editedProduct.propertyType}
          onChange={handleInputChange}
          mb={4}
        >
          {PropertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
          <Text mb={2}>Description:</Text>
          <Input
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
            mb={4}
          />
          <Text mb={2}>City:</Text>
          <Input
            name="city"
            value={editedProduct.city}
            onChange={handleInputChange}
            mb={4}
            />
          <Text mb={2}>Area:</Text>
          <Input
            name="area"
            value={editedProduct.area}
            onChange={handleInputChange}
            mb={4}
            />
          <FormControl isInvalid={error !== null}>
            <FormLabel mb={2}>Pincode:</FormLabel>
            <Input
              name="pincode"
              type="text"
              value={editedProduct.pincode}
              onChange={handleInputChange}
              mb={2}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Text mb={2}>Bedrooms:</Text>
          <Input
            name="bedrooms"
            type="number"
            value={editedProduct.bedrooms}
            onChange={handleInputChange}
            mb={4}
          />
          <Text mb={2}>Bathroom:</Text>
          <Input
            name="bathrooms"
            type="number"
            value={editedProduct.bathrooms}
            onChange={handleInputChange}
            mb={4}
          />
          <Text mb={2}>Price:</Text>
          <Input
            name="price"
            type="number"
            value={editedProduct.price}
            onChange={handleInputChange}
            mb={4}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
