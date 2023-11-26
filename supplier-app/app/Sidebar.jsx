import { Separator } from "@/components/ui/separator";
import React from "react";
import { Menu } from "antd";
import { items, settings } from "@/routes";

const Sidebar = () => {
  return (
    <div className="w-[300px] p-5">
      <div className="flex flex-col ">
        <div>
          <Menu
            mode="inline"
            style={{
              width: 256,
              border: "0",
            }}
            items={items}
          />
        </div>
        <div>
          <Separator className="my-4 w-[90%]" />
          <Menu
            mode="inline"
            style={{
              width: 256,
              border: "0",
            }}
            items={settings}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
