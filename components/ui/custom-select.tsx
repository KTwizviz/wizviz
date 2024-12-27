import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CustomSelectWithInput() {
  return (
    <div className="flex gap-1">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="제목" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-SYSTEM-white">
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input id="picture" type="text" className="w-[300px]" />
      <Button className="border">검색</Button>
    </div>
  );
}
