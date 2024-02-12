import { Mailer } from "@/types/types";
import { Html, Tailwind, Heading, Text, Img, Head, Body, Container, Section, Row } from "@react-email/components";

export default function TemplateEmail({ firstname, lastname, object, email, text }: Mailer) {
  const paragraphs = text.split("\n").map((line, index) => (
    <Text key={index} className="text-lg">
      {line}
    </Text>
  ));

  console.log(process.env.BASE_URL);
  console.log(`${process.env.BASE_URL}/assets/email.png`);

  return (
    <Tailwind>
      <Html className="bg-slate-100 text-slate-600">
        <Head />
        <Body>
          <Container className="4 bg-slate-900 shadow-xl rounded-md">
            <Img src={`${process.env.BASE_URL}/assets/email.png`} alt="bannière de l'email" width="800" height="400" className="w-full h-auto" />
            <Section className="p-4 bg-white">
              <Row>
                <Heading>{object}</Heading>
              </Row>
              <Row>
                <Heading as="h2">{`De : ${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</Heading>
              </Row>
              <Row>
                <Heading as="h3">{email}</Heading>
              </Row>
              <Row>{paragraphs}</Row>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
