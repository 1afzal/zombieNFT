import React from "react";
import HealthBar from "@/components/ui/8bit/health-bar";
import { Button } from "@/components/ui/8bit/button"
import Bid from "./bid";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

function RedundantCards(props) {
  // title, healthbar, imgsrc
  return (
    <Card className="w-75 h-80 min-w-[14rem] min-h-[14rem] max-w-xs max-h-xs flex flex-col justify-between items-center shadow-lg bg-white/90 ">
      <div className="flex flex-col h-full w-full items-center justify-between">
        <CardHeader className="pb-2 text-center w-full flex flex-col items-center justify-center">
          <CardTitle className="text-lg font-bold flex items-center justify-center w-full">
            {props.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-0 w-full flex-1">
          <img
            src={props.imgsrc}
            alt={props.title}
            className="w-32 h-32 object-contain rounded-md border border-gray-200 bg-gray-50 mx-auto"
          />
        </CardContent>
        <CardFooter className="w-full flex flex-col items-center justify-center pt-2 border-t-2 border-gray-300">
          <HealthBar value={props.healthbar} variant="retro" className="w-11/12" />
          <span className="text-xs mt-1 text-gray-600">{props.healthbar}% HP</span>
          <div className="flex items-center  gap-20">
            <Button className="text-sm">
              <Bid method="buy"/>
            </Button>
            <Button variant="destructive">
              <Bid  method="sell"/>
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default RedundantCards;
