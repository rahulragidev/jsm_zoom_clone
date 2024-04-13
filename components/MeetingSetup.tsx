"use client";
import React, { useEffect, useState } from "react";
import {
  VideoPreview,
  useCall,
  DeviceSettings,
} from "@stream-io/video-react-sdk";

const MeetingSetup = () => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join With mic and camera off
        </label>
        <DeviceSettings />
      </div>
    </div>
  );
};

export default MeetingSetup;
