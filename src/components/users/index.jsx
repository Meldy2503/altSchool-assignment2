import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import {
  Container,
  Heading,
  Card,
  CardContainer,
  Img,
  Contents,
  Name,
  Gender,
  Email,
  Username,
  Age,
  Phone,
  Country,
  PgNo,
  Btn,
  PgNosBtn,
} from "./usersStyle";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      //   setLoading(true);
      const response = await axios.get("https://randomuser.me/api/?results=60");
      setUsers(response.data.results);
      //   setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  //   if (loading) {
  //     return <Loading />;
  //   }
  const PER_PAGE = 12;
  const total = users?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <Container>
      <Heading>All Users</Heading>

      <CardContainer>
        {users?.slice(skip, skip + PER_PAGE).map((user) => {
          return (
            <Card key={user.login.uuid}>
              <Img src={user.picture.large} alt="user" />
              <Contents>
                <Name>
                  {user.name.title} {user.name.first} {user.name.last}{" "}
                </Name>
                <Email>{user.email}</Email>
                <Username>Username: {user.login.username}</Username>
                <Gender>Gender: {user.gender}</Gender>
                <Age>Age: {user.dob.age}</Age>
                <Phone>Phone: {user.phone}</Phone>
                <Country>Country: {user.location.country}</Country>
              </Contents>
            </Card>
          );
        })}
      </CardContainer>

      <PgNo>
        Pages: {page} of {pages}
      </PgNo>

      <Btn disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        prev
      </Btn>

      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (user) => (
          <PgNosBtn key={user} onClick={() => setPage(user)}>
            {user}
          </PgNosBtn>
        )
      )}
      <Btn
        disabled={page >= pages}
        aria-disabled={page >= pages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        next
      </Btn>
    </Container>
  );
};

export default Users;
