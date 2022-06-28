import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Gabe Morring</Name>
            <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where To?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col h-screen `;

const ActionItems = tw.div`flex-1 p-4`;

const Header = tw.div`flex justify-between items-center`;

const UberLogo = tw.img`h-28`;

const Profile = tw.div`flex items-center`;

const Name = tw.div`mr-4 w-20 text-lg`;

const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-300 p-px`;

const ActionButtons = tw.div`flex `;

const ActionButton = tw.div`flex flex-col items-center justify-center 
                            bg-gray-200 flex-1 m-1 h-32 rounded-lg 
                            transform hover:scale-105 transition text-xl`;

const ActionButtonImage = tw.img`h-3/5`;

const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 mt-8 flex items-center rounded-lg`;
