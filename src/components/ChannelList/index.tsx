import React from "react";

import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="news" />
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="cs-go" />
      <ChannelButton channelName="new-world" />
    </Container>
  );
};

export default ChannelList;
