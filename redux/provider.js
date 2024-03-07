"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </ChakraProvider>
    </Provider>
  );
}
