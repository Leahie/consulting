// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Input,
//   Button,
//   Typography,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import {
//   BanknotesIcon,
//   CreditCardIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/solid";

// function formatCardNumber(value: string) {
//   const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
//   const matches = val.match(/\d{4,16}/g);
//   const match = (matches && matches[0]) || "";
//   const parts = [];

//   for (let i = 0, len = match.length; i < len; i += 4) {
//     parts.push(match.substring(i, i + 4));
//   }

//   return parts.length ? parts.join(" ") : value;
// }

// function formatExpires(value: string) {
//   return value
//     .replace(/[^0-9]/g, "")
//     .replace(/^([2-9])$/g, "0$1")
//     .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
//     .replace(/^0{1,}/g, "0")
//     .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
// }

// export default function CheckoutForm() {
//   const [type, setType] = React.useState("card");
//   const [cardNumber, setCardNumber] = React.useState("");
//   const [cardExpires, setCardExpires] = React.useState("");

//   const handleCardSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!cardNumber || !cardExpires || cardNumber.length < 19) {
//       alert("Please enter complete card details.");
//       return;
//     }
//     // Proceed with actual submission
//   };

//   return (
//     <motion.div
//       className="pt-16 px-4 mx-auto"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//     <Card className="w-full mx-auto bg-slate-100 text-black p-2 rounded-xl">
//       <CardHeader 
//         color="gray"
//         floated={false}
//         shadow={false}
//         className="m-0 grid place-items-center px-4 py-8 text-center"
//       ></CardHeader>
//       <CardBody>
//         <Tabs value={type} className="overflow-visible">
//           <TabsHeader className="relative z-0">
//             <Tab
//               value="card"
//               onClick={() => setType("card")}
//               className={`rounded-md px-4 py-2 transition-colors duration-200 ${
//                 type === "card" ? "text-white bg-zinc-900" : "hover:bg-zinc-300"
//               }`}
//             >
//               Pay with Card
//             </Tab>
//             <Tab
//               value="paypal"
//               onClick={() => setType("paypal")}
//               className={`rounded-md px-4 py-2 transition-colors duration-200 ${
//                 type === "paypal" ? "text-white bg-zinc-900" : "hover:bg-zinc-300"
//               }`}
//             >
//               Pay with PayPal
//             </Tab>
//           </TabsHeader>
//           <TabsBody
//             className="!overflow-x-hidden "
//             animate={{
//               initial: { x: type === "card" ? 400 : -400 },
//               mount: { x: 0 },
//               unmount: { x: type === "card" ? 400 : -400 },
//             }}
//           >
//             <TabPanel value="card" className="p-0">
//               <form onSubmit={handleCardSubmit} className="mt-12 flex flex-col gap-4">

//                 <div className="my-3">
//                   <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
//                     Card Details
//                   </Typography>
//                   <Input
//                     maxLength={19}
//                     value={formatCardNumber(cardNumber)}
//                     onChange={(e) => setCardNumber(e.target.value)}
//                     placeholder="0000 0000 0000 0000"
//                     containerProps={{ className: "p-2" }}
//                     className="rounded-md border-t-blue-gray-200 focus:border-t-gray-900 p-2"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                   <div className="my-4 flex items-center gap-4">
//                     <div>
//                       <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
//                         Expires
//                       </Typography>
//                       <Input
//                         maxLength={5}
//                         value={formatExpires(cardExpires)}
//                         onChange={(e) => setCardExpires(e.target.value)}
//                         placeholder="00/00"
//                         containerProps={{ className: "p-2 min-w-[72px]" }}
//                         className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                     <div>
//                       <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
//                         CVC
//                       </Typography>
//                       <Input
//                         maxLength={4}
//                         placeholder="000"
//                         containerProps={{ className: "p-2 min-w-[72px]" }}
//                         className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900  p-2"
//                         labelProps={{
//                           className: "before:content-none after:content-none",
//                         }}
//                       />
//                     </div>
//                   </div>

//                 </div>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="mt-0.5 pb-5 w-4" /> Payments are secure and encrypted
//                 </Typography>
//               </form>
//             </TabPanel>

//             <TabPanel value="paypal" className="p-0">
//               <form className="mt-12 flex flex-col gap-4">
//                 <div>
//                   <Typography variant="paragraph" color="blue-gray" className="mb-4 font-medium">
//                     Personal Details
//                   </Typography>
//                   <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
//                     Your Email
//                   </Typography>
//                   <Input
//                     type="email"
//                     placeholder="name@mail.com"
//                     containerProps={{ className: "p-2" }}
//                     className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900  p-2"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>

//                 <div className="my-6">
//                   <Typography variant="paragraph" color="blue-gray" className="mb-4 font-medium ">
//                     Billing Address
//                   </Typography>
//                   <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
//                     Country
//                   </Typography>
//                   <Select
//                     placeholder="USA"
//                     className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                     menuProps={{ className: "h-48" }}
//                   >

//                   </Select>
//                   <Typography variant="small" color="blue-gray" className="mt-4 -mb-2 font-medium">
//                     Postal Code
//                   </Typography>
//                   <Input
//                     placeholder="0000"
//                     containerProps={{ className: "p-2 mt-4" }}
//                     className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900  p-2"
//                     labelProps={{
//                       className: "before:content-none after:content-none",
//                     }}
//                   />
//                 </div>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex items-center justify-center gap-2 font-medium opacity-60"
//                 >
//                   <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are secure and encrypted
//                 </Typography>
//               </form>
//             </TabPanel>
//           </TabsBody>
//         </Tabs>
//       </CardBody>
//     </Card>
//     </motion.div>
//   );
// }
