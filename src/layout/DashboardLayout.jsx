import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout() {
  const bar = [
    {
      name: "Dashboard",
      pathname: "/dashboard",
    },

    {
      name: "My Offers",
      pathname: "/dashboard/my_offers",
    },
    {
      name: "Offer Sent",
      pathname: "/dashboard/offer_sent",
    },
    {
      name: "My Tasks",
      pathname: "/dashboard/my_tasks",
    },
  ];
  const location = useLocation();
  const { pathname } = location;
  //   console.log(pathname);
  return (
    <div className="bg-white pt-6">
      <div className="flex flex-col lg:flex-row h-full bg-white container  w-full px-4">
        <aside className="min-w-[18rem]  my-8 py-8 px-3 bg-[#F3F3F7] rounded-3xl m-0 h-full">
          <div className="flex flex-col items-center space-x-4 p-2 mb-5">
            <Avatar alt="User profile" className="w-32 h-32">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <h2 className="text-lg font-semibold mt-4">Mahmud Qudrati</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {bar.map((b, i) => {
              return (
                <Link
                  key={i}
                  className={`block py-2 px-4  rounded-md font-clash font-medium ${
                    pathname === b.pathname
                      ? "text-blue-500 bg-blue-100"
                      : "hover:bg-gray-50"
                  } `}
                  to={b.pathname}
                >
                  {b.name}
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 p-8 pe-0 min-h-min">
          <Outlet />
          {/* <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">My Tasker Dashboard</h1>
              <Badge className="flex items-center space-x-1" variant="">
                <MedalIcon className="h-6 w-6 text-yellow-400" />
                <span>Bronze</span>
                <span className="text-sm">20% service fee excl. GST</span>
              </Badge>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white p-6 shadow-sm">
                <CardHeader>
                  <CardTitle>Your Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">
                    Your Completion Rating (last 20 tasks)
                  </h3>
                  <p className="text-sm mb-4">
                    We&apos;ve set your Completion Rating as Good to help
                    kickstart your Airtasker journey. Complete your assigned
                    tasks to keep this score high!
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{
                        width: "50%",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Poor</span>
                    <span>Okay</span>
                    <span>Good</span>
                    <span>Excellent</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 shadow-sm">
                <CardHeader>
                  <CardTitle>Your Earnings (last 30 days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Your earnings are $880 away from Silver and lowering service
                    fees.
                  </p>
                  <div className="flex justify-between text-xs">
                    <span>$0</span>
                    <span>$880</span>
                    <span>$2,650</span>
                    <span>$5,300+</span>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div> */}
        </main>
      </div>
    </div>
  );
}
// function BarChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           {
//             name: "A",
//             data: 111,
//           },
//           {
//             name: "B",
//             data: 157,
//           },
//           {
//             name: "C",
//             data: 129,
//           },
//           {
//             name: "D",
//             data: 187,
//           },
//           {
//             name: "E",
//             data: 119,
//           },
//           {
//             name: "F",
//             data: 22,
//           },
//           {
//             name: "G",
//             data: 101,
//           },
//           {
//             name: "H",
//             data: 83,
//           },
//         ]}
//         keys={["data"]}
//         indexBy="name"
//         margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
//         padding={0.3}
//         valueScale={{ type: "linear" }}
//         indexScale={{ type: "band", round: true }}
//         colors={{ scheme: "paired" }}
//         borderWidth={1}
//         borderColor={{
//           from: "color",
//           modifiers: [["darker", 0.2]],
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Name",
//           legendPosition: "middle",
//           legendOffset: 45,
//           truncateTickAt: 0,
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: "Number",
//           legendPosition: "middle",
//           legendOffset: -45,
//           truncateTickAt: 0,
//         }}
//         theme={{
//           tooltip: {
//             container: {
//               fontSize: "12px",
//             },
//           },
//         }}
//         labelSkipWidth={12}
//         labelSkipHeight={12}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   );
// }
