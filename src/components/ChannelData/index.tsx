import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div !== null && div !== undefined) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="João Martins"
            date="03/06/2021"
            content="Hoje é meu aniversário!"
          />
        ))}
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
