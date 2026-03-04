import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const { t } = await getServerI18n();

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Text
        align="center"
        onBackground="neutral-weak"
        variant="body-default-m"
      >
        {t("work.pageIntro")}
      </Text>
      <Column fillWidth gap="m">
        <Heading as="h2" variant="heading-strong-m">
          {t("work.section1.title")}
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-s">
          {t("work.section1.desc")}
        </Text>
        <Text onBackground="brand-medium" variant="body-default-s">
          Examples:{" "}
          <a href="https://nutriderm.sanyal.net" target="_blank" rel="noopener noreferrer">
            Nutriderm
          </a>
          ,{" "}
          <a href="https://als.sanyal.net" target="_blank" rel="noopener noreferrer">
            ALS
          </a>
          ,{" "}
          <a href="https://eco-tycoon.sanyal.net" target="_blank" rel="noopener noreferrer">
            Eco Tycoon
          </a>
          ,{" "}
          <a href="https://brainbrew.sanyal.net" target="_blank" rel="noopener noreferrer">
            BrainBrew
          </a>
        </Text>
        <Projects include={["product-portfolio"]} />
      </Column>

      <Column fillWidth gap="m">
        <Heading as="h2" variant="heading-strong-m">
          {t("work.section2.title")}
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-s">
          {t("work.section2.desc")}
        </Text>
        <Projects include={["infrastructure-homelab"]} />
      </Column>

      <Column fillWidth gap="m">
        <Heading as="h2" variant="heading-strong-m">
          {t("work.section3.title")}
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-s">
          {t("work.section3.desc")}
        </Text>
        <Projects include={["ai-automation-hub"]} />
      </Column>

      <Column fillWidth gap="m" marginBottom="40">
        <Heading as="h2" variant="heading-strong-m">
          {t("work.section4.title")}
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-s">
          {t("work.section4.desc")}
        </Text>
        <Projects include={["identity-observability"]} />
      </Column>
    </Column>
  );
}
