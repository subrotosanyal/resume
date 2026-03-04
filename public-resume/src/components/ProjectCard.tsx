"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  subtitle?: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  subtitle,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m" border="neutral-alpha-weak" background="surface" radius="l" padding="m">
      {images.length > 0 && (
        <Carousel
          aspectRatio="16 / 9"
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: (
              <Media
                src={image}
                alt={title}
                fill
                objectFit="contain"
                background="neutral-alpha-weak"
              />
            ),
            alt: title,
          }))}
        />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5} direction="column" gap="4">
            <SmartLink href={href}>
              <Heading as="h2" wrap="balance" variant="heading-strong-l">
                {title}
              </Heading>
            </SmartLink>
            {subtitle?.trim() && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {subtitle}
              </Text>
            )}
            <SmartLink href={href}>
              <Text variant="body-default-s" onBackground="brand-medium">
                View project details
              </Text>
            </SmartLink>
            {link?.trim() && (
              <SmartLink href={link}>
                <Text variant="body-default-s" onBackground="brand-medium">
                  {link}
                </Text>
              </SmartLink>
            )}
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
          </Column>
        )}
      </Flex>
    </Column>
  );
};
