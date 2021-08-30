import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Admin - 1</Role>
      <UserRow nickname="Jo&atilde;o Martins" />
      <Role>Dispon&iacute;vel - 1</Role>
      <UserRow nickname="My API Bot" isBot />
      <UserRow nickname="Jo&atilde;o Martins" />
      <Role>Offline - 18</Role>
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
      <UserRow nickname="Lorem Ipsum" />
    </Container>
  );
};

export default UserList;
