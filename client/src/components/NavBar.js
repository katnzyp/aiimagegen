import React from "react";
import styled from "styled-components";
import Button from "./Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';

import { useLocation, useNavigate } from "react-router-dom";
const Container = styled.div`
  
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const NavBar = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      GenAi
      {path[1] === "post" ? (
        <Button
          text="Explore post"
          leftIcon={<ExploreRoundedIcon style={{ fontSize: "18px" }} />}
          type="secondary"
          onClick={()=>navigation("/")}
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRoundedIcon style={{ fontSize: "18px" }} />}
          onClick={()=>navigation("/post")}

        />
      )}
    </Container>
  );
};

export default NavBar;
