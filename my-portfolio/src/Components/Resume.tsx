import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function Resume() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Resume" size="lg">
        {/* Modal content - Embed a PDF viewer for the resume */}
        <div className="flex justify-center">
          <iframe
            src="/path/to/your/resume.pdf" // Replace with the path to your resume
            width="100%"
            height="500px"
            title="Resume PDF"
          />
        </div>
      </Modal>

      <Button onClick={open} variant="outline" color="blue">
        Open Resume
      </Button>
    </>
  );
}

export default Resume;
