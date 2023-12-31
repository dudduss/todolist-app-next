import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  HStack,
  Select,
} from "@chakra-ui/react";
import { Group, ListItem } from "../schemas";

export default function Home() {
  const [groups, setGroups] = useState<Group[]>([
    {
      name: "Health",
      items: [
        { name: "Run", completed: false },
        { name: "Yoga", completed: false },
      ],
    },
    {
      name: "Groceries",
      items: [
        { name: "Banana", completed: false },
        { name: "Apples", completed: false },
      ],
    },
  ]);
  const [groupName, setGroupName] = useState<string>("");
  const [itemToMove, setItemToMove] = useState<ListItem | null>(null);
  const [groupToMoveFrom, setGroupToMoveFrom] = useState<Group | null>(null);

  const {
    isOpen: isOpenGroup,
    onOpen: onOpenGroup,
    onClose: onCloseGroup,
  } = useDisclosure();

  const {
    isOpen: isOpenMoveItem,
    onOpen: onOpenMoveItem,
    onClose: onCloseMoveItem,
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box>
          <Text fontWeight={"bold"} fontSize={"4xl"}>
            To-Do List App
          </Text>
          <Button onClick={onOpenGroup}>Add Group</Button>
          {groups.map((group) => (
            <Box key={group.name} marginBottom={20}>
              <Text>{group.name}</Text>
              <Button>Add Item</Button>
              {group.items.map((item) => (
                <HStack key={item.name}>
                  <Text>{item.name}</Text>
                  <Button onClick={}>Move</Button>
                </HStack>
              ))}
            </Box>
          ))}
        </Box>

        <Modal isOpen={isOpenGroup} onClose={onCloseGroup}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Get groceries"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  setGroups([...groups, { name: groupName, items: [] }]);
                }}
              >
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isOpenMoveItem} onClose={onCloseMoveItem}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Move Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select placeholder="Select list to move to">
                {groups.map((group) => (
                  <option value={group.name} key={group.name}>
                    {group.name}
                  </option>
                ))}
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => {}}>
                Move
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </main>
    </>
  );
}
