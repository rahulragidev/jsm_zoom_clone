import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
	const now = new Date();
	const time = now.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
	const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
		now
	);

	return (
		<section className="flex flex-col gap-5 text-white min-h-screen">
			<div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
				<div className="flex h-full flex-col justify-between p-11 max-md:px-5 max-md:py-8">
					<div className="flex flex-col gap-2">
						<h1 className="text-7xl font-extrabold lg:text-7xl max-md:text-4xl">
							{time}
						</h1>
						<p className="text-2xl font-medium text-sky-1 lg:text-2xl max-md:text-lg">
							{date}
						</p>
					</div>
				</div>
			</div>
			<MeetingTypeList />
		</section>
	);
};

export default Home;
