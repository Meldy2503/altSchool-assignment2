import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import {
  Container,
  Contents,
  Heading,
  Card,
  CardWrapper,
  CardContents,
  Img,
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
      <Contents>
        <Heading>Our Global Subscribers</Heading>

        <CardWrapper>
          {users?.slice(skip, skip + PER_PAGE).map((user) => {
            return (
              <Card key={user.login.uuid}>
                <Img src={user.picture.large} alt="user" />
                <CardContents>
                  <h3>
                    {user.name.title} {user.name.first} {user.name.last}{" "}
                  </h3>
                  <h4>{user.email}</h4>
                  <p>Username: {user.login.username}</p>
                  <p>Gender: {user.gender}</p>
                  <p>Age: {user.dob.age}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Country: {user.location.country}</p>
                </CardContents>
              </Card>
            );
          })}
        </CardWrapper>

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
      </Contents>
    </Container>
  );
};

export default Users;
