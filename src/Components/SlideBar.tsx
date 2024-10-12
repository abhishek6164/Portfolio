import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { IconX, IconMenu2 } from "@tabler/icons-react";
import { navLinks } from "./Header"; // Reuse the navLinks function
import React from "react";

const SideBar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden"
        position="right"
        opened={opened}
        size="50vw"
        onClose={close}
      >
        <Drawer.Overlay
          style={{ background: "rgba(0, 0, 0, 0.5)", filter: "blur(4px)" }}
        />
        <Drawer.Content bg="#402E7A">
          <Drawer.Header bg="#402E7A">
            <Drawer.CloseButton icon={<IconX size={40} stroke={1.5} />} />
          </Drawer.Header>
          <Drawer.Body>
            <div className="flex flex-col items-center gap-5">
              {navLinks(true)} {/* Pass true to render in sidebar style */}
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button className="md:!hidden bg-bgColor text-textColor" onClick={open}>
        <IconMenu2 size={50} stroke={0.5} />
      </Button>
    </>
  );
};

export default SideBar;
