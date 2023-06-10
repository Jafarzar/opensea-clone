import Header from "@/components/Header";
import Navigations from "@/components/Navigations";
import { Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack spacing={0}>
      <Header />
      <Navigations />
    </Stack>
  );
}
