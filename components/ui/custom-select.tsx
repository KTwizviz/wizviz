import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
            <SelectItem value="apple">제목</SelectItem>
            <SelectItem value="banana">내용</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        id="picture"
        type="text"
        className="w-[300px]"
        placeholder="검색어를 입력해주세요"
      />
      <Button className="border">검색</Button>
    </div>
  );
}
