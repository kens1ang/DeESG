"use client";

import Profile from "./profile/Profile";
import { Divider } from "@nextui-org/react";
import DevicesTable from "./profile/DevicesTable";
import EsgScore from "./profile/EsgScore";

const Explore = () => {

  

  return (
    <main>
      <div className="flex p-8 pt-0 gap-3">
        <div className="basis-4/12">
          <Profile />
        </div>

        <div className="basis-8/12">
          <div className="flex flex-col justify-start">
            <EsgScore />
            <Divider />
            <DevicesTable />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Explore;
