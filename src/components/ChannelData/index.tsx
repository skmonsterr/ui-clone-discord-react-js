import React from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="João Martins"
          date="03/06/2021"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="João Martins"
          date="04/06/2021"
          content="Testando o discord"
        />
        <ChannelMessage
          author="My API Bot"
          date="03/06/2021"
          content={
            <>
              <Mention>@João Martins</Mention>, me ajuda com um problema em um
              projeto React JS?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
