import * as React from "react";
import { Box, VStack, Text, HStack, Icon, Flex } from "@chakra-ui/react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Tooltip } from "../ui/tooltip";
import { Tag } from "../ui/tag";

interface RepositoryCardProps {
  title: string;
  description: string;
  url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const GithubCard = (props: RepositoryCardProps) => {
  const { title, description, language, url, stargazers_count, forks_count } =
    props;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    link: string,
  ) => {
    window.open(link, "_blank");
    e.stopPropagation();
  };

  return (
    <Box
      py={2}
      px={[2, 4]}
      mt={2}
      rounded="xl"
      borderWidth="1px"
      bg="white"
      borderColor="black"
      _hover={{
        shadow: "lg",
        textDecoration: "none",
      }}
    >
      <VStack overflow="hidden" align="start" gap={1}>
        <VStack gap={1} align="start" w="100%">
          <Flex
            justifyContent="space-between"
            width="100%"
            onClick={(e) => handleLinkClick(e, url)}
          >
            <Tooltip
              showArrow
              content="Access Repo"
              positioning={{ placement: "top" }}
            >
              <HStack cursor="pointer">
                <Icon as={FiGithub} boxSize="1em" mt="1px" />
                <Text
                  fontSize="sm"
                  maxHeight="0.5em"
                  fontWeight="500"
                  textAlign="left"
                >
                  {title}
                </Text>
              </HStack>
            </Tooltip>
            <HStack cursor="pointer" onClick={(e) => handleLinkClick(e, url)}>
              {forks_count > 0 && (
                <Flex _hover={{ color: "purple.700" }} alignItems="center">
                  <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                  <Box as="span" ml="1" fontSize="sm">
                    {forks_count}
                  </Box>
                </Flex>
              )}
              <Flex alignItems="center" _hover={{ color: "purple.700" }}>
                <Icon as={BiStar} boxSize="0.9em" mt="1px" />
                <Box as="span" ml="1" fontSize="sm">
                  {stargazers_count}
                </Box>
              </Flex>
            </HStack>
          </Flex>
          {language && (
            <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack>
                  <Tag size="md" colorPalette="purple">
                    {language}
                  </Tag>
                </HStack>
              </Box>
            </Flex>
          )}
        </VStack>
        <Box>
          <Text color="gray.500" fontSize="sm" maxHeight="5em" textAlign="left">
            {description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default GithubCard;
