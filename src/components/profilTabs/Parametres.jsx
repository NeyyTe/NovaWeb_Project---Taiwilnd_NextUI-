import React from "react";
import { useState } from "react";
import { Switch } from "@nextui-org/switch";
import { ChevronDown } from "../Icons.jsx";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Divider } from "@nextui-org/divider";

export default function Parametres() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="max-w-lg mt-10 px-4 m-8 ">
      <h1 className="text-3xl font-bold ">Paramètres du Profil</h1>{" "}
      <Divider className="bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 my-8" />
      {/* <hr className="bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 h-1 border-none rounded my-8" /> */}
      <div className="space-y-4 bg-primary-50/70  p-8 rounded">
        <h1 className="text-xl text-gray-100">Informations Personnel</h1>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
          <Input type="text" label="Nom" placeholder="Zoey" />
          <Input type="text" label="Prénom" placeholder="Doe" />
        </div>
        <div>
          {" "}
          <Input
            type="email"
            label="Email"
            placeholder="zoey@gmail.com"
            // endContent={
            //   <span className="text-xs self-center text-green-500">
            //     Email vérifié
            //   </span>
            // }
          />
        </div>

        <div className=" ">
          <Select
            label="Langue"
            className=""
            placeholder="Selectionner votre langue..."
          >
            <SelectItem
              key="argentina"
              startContent={
                <Avatar
                  alt="Argentina"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ar.svg"
                />
              }
            >
              Argentina
            </SelectItem>
            <SelectItem
              key="venezuela"
              startContent={
                <Avatar
                  alt="Venezuela"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ve.svg"
                />
              }
            >
              Venezuela
            </SelectItem>
            <SelectItem
              key="brazil"
              startContent={
                <Avatar
                  alt="Brazil"
                  className="w-6 h-6"
                  src="https://flagcdn.com/br.svg"
                />
              }
            >
              Brazil
            </SelectItem>
            <SelectItem
              key="switzerland"
              startContent={
                <Avatar
                  alt="Switzerland"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ch.svg"
                />
              }
            >
              Switzerland
            </SelectItem>
            <SelectItem
              key="germany"
              startContent={
                <Avatar
                  alt="Germany"
                  className="w-6 h-6"
                  src="https://flagcdn.com/de.svg"
                />
              }
            >
              Germany
            </SelectItem>
            <SelectItem
              key="spain"
              startContent={
                <Avatar
                  alt="Spain"
                  className="w-6 h-6"
                  src="https://flagcdn.com/es.svg"
                />
              }
            >
              Spain
            </SelectItem>
            <SelectItem
              key="france"
              startContent={
                <Avatar
                  alt="France"
                  className="w-6 h-6"
                  src="https://flagcdn.com/fr.svg"
                />
              }
            >
              France
            </SelectItem>
            <SelectItem
              key="italy"
              startContent={
                <Avatar
                  alt="Italy"
                  className="w-6 h-6"
                  src="https://flagcdn.com/it.svg"
                />
              }
            >
              Italy
            </SelectItem>
            <SelectItem
              key="mexico"
              startContent={
                <Avatar
                  alt="Mexico"
                  className="w-6 h-6"
                  src="https://flagcdn.com/mx.svg"
                />
              }
            >
              Mexico
            </SelectItem>
          </Select>
        </div>
      </div>
      {/* <Divider className="bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 my-8" /> */}
      <div className="bg-primary-50/70 p-8 rounded mt-4">
        <h1 className="text-xl text-gray-100">Notifications</h1>
        <RadioGroup
          defaultValue="aucune"
          label="Sélectionnez le type de notifications que vous souhaitez recevoir."
        >
          <Radio value="aucune">Aucune</Radio>
          <Radio value="push">Notifications push</Radio>
          <Radio value="email">Notifications par e-mail</Radio>
          <Radio value="sms">Notifications par SMS</Radio>
          <Radio value="sound">Notifications sonores</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
