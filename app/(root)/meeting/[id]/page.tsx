"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetUpComplete, setisSetUpComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ? <MeetingSetup setisSetUpComplete={setisSetUpComplete} /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
