import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Container = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  margin: 10px 0;
`;
const Left = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 40px;
  font-weight: 400;
`;
const Desc = styled.p``;
const Icon = styled.div`
  margin-right: 10px;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: 0 20px;
  }
  flex: 1;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Head = styled.h3`
  font-weight: 500;
`;
const ListItems = styled.li`
  margin: 3px 0;
  display: flex;
  width: 50%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    margin: 0 20px;
  }
  justify-content: space-between;
  flex: 1;
`;
const ScriptIcon = styled.div`
  display: flex;
`;
const Payment = styled.img``;
const IconContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  background-color: ${(props) => props.color && props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Meso</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, totam
          voluptates sapiente id ipsum non fugiat asperiores magni itaque
          numquam sed accusamus, eveniet impedit quasi rerum saepe repellat iure
          ipsam.
        </Desc>
        <IconContainer>
          <SocialIcon color='pink'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='blue'>
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon color='pink'>
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color='red'>
            <YouTubeIcon />
          </SocialIcon>
        </IconContainer>
      </Left>
      <Center>
        <Head>Usfel Links</Head>
        <List>
          <ListItems key={64566}>Home</ListItems>
          <ListItems key={6456633}>Man Fashion</ListItems>
          <ListItems key={64566767}>Accessories</ListItems>
          <ListItems key={64566212}>Order Tracking</ListItems>
          <ListItems key={645661}>Wishlist</ListItems>
          <ListItems key={64566431}>Cart</ListItems>
          <ListItems key={645660}>My Account</ListItems>
          <ListItems key={645669}>Wishlist</ListItems>
          <ListItems key={645626}>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Head>Contacts</Head>
        <ScriptIcon>
          <Icon>
            <LocationOnIcon />
          </Icon>
          622 Lixi,Path Noth Grandtower
        </ScriptIcon>
        <ScriptIcon>
          <Icon>
            <PhoneIcon />
          </Icon>
          +0124323424
        </ScriptIcon>
        <ScriptIcon>
          <Icon>
            <MailOutlineIcon />
          </Icon>
          Khamessmo@gmail.com
        </ScriptIcon>
        <ScriptIcon>
          <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
        </ScriptIcon>
      </Right>
    </Container>
  );
};

export default Footer;
