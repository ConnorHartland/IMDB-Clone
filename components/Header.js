import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div>
      <div className="">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
      </div>
      <Image
        src="https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png"
        width={100}
        height={100}
      />
    </div>
  );
}
