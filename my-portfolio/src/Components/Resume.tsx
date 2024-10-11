import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function Resume() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Resume">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export default Resume;
