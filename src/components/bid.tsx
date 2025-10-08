import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/8bit/drawer";
import { Button } from "@/components/ui/8bit/button"

function Bid(props) {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>{props.method}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you sure you want to {props.method}?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex-row gap-10 justify-center items-center  ">
            <Button variant={props.variant}>Submit</Button>
            <DrawerClose>
              <Button variant="destructive">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Bid;
