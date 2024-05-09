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
	const [isSetUpComplete, setIsSetUpComplete] = useState(false);
	const { call, isCallLoading } = useGetCallById(id);

	if (!isLoaded || isCallLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<Loader />
			</div>
		);
	}

	return (
		<main className="min-h-screen">
			<StreamCall call={call}>
				<StreamTheme>
					<div className="flex flex-col items-center justify-center min-h-screen">
						{!isSetUpComplete ? (
							<MeetingSetup setisSetUpComplete={setIsSetUpComplete} />
						) : (
							<MeetingRoom />
						)}
					</div>
				</StreamTheme>
			</StreamCall>
		</main>
	);
};

export default Meeting;
