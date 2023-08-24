import { List } from "phosphor-react-native";
import { Heading } from "../../components/Headings";
import { ProfileImage } from "../../components/ProfileImage";
import { TrainingCard } from "../../components/TrainingCard";
import {
  Container,
  Content,
  Greeting,
  Header,
  Highlight,
  InfoPanel,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <Greeting>
          <ProfileImage size="small" />
          <Heading small>Olá, Usuário</Heading>
        </Greeting>
        <List size="32" weight="regular" />
      </Header>

      <Content>
        <InfoPanel>
          <Heading>Infos</Heading>
        </InfoPanel>

        <Highlight>
          <Heading>Aviso</Heading>
        </Highlight>

        <TrainingCard title="Treino A" />
        <TrainingCard title="Treino B" />
      </Content>
    </Container>
  );
}
