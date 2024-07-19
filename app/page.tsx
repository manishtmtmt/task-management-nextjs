"use client";

import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";

import Filter from "./components/Filter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <Filter />
        <Button onPress={onOpen} color="primary">
          Create New Task
        </Button>
      </div>
      <TaskList />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => <TaskForm onClose={onClose} />}
        </ModalContent>
      </Modal>
    </main>
  );
}
