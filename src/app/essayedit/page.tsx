"use client";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
// import Pay from "./Pay";
// import Checkout from "@/(components)/Checkout"

export default function EssayEdit() {
  const [essayType, setEssayType] = useState("");
  const [time, setTime] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [factor, setFactor] = useState(0);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const factorSetter = (time: string) => {
    setTime(time);
    if (time == "Standard <3") setFactor(0.08);
    else if (time == "Rush <2") setFactor(0.12);
    else if (time == "Express <1") setFactor(0.2);
    else setFactor(0);
  };

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    const firstName = firstNameRef.current?.value.trim();
    const lastName = lastNameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName || !email) {
      e.preventDefault();
      alert("Please fill out your name and email.");
      return;
    }

    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }

    if (!essayType) {
      e.preventDefault();
      alert("Please select an essay type.");
      return;
    }

    if (!time) {
      e.preventDefault();
      alert("Please select a turnaround time.");
      return;
    }
  };

  return (
    <motion.div
      className="pt-16 px-4 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        Edit My Essay
      </h1>

      <div className="flex justify-center">
        <Card className="w-[80vw] p-8 text-white mx-auto" shadow={false}>
          <h2 className="text-2xl underline underline-offset-8 mb-2 text-left">
            How We Edit
          </h2>

          <Typography color="gray" className="mt-1 font-normal text-left">
            <p>
              Welcome to asynchronous editing where we provide quick and concise
              feedback to student writing!
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>Each edit follows the standards of our rubric</li>
              <li>The editors are all the members of our team</li>
              <li>You can choose between our specialized editors</li>
              <li>
                Each submission will be reviewed by one editor, occasionally
                there will be a second reviewer.
              </li>
              <li>
                Please see our Price Guide{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 underline"
                  href="https://docs.google.com/document/d/1LuGDoUUVAS34B7I31clbPbjC1yGj9Muy2Ce-E11Zm58/edit?usp=sharing"
                >
                  here
                </a>
              </li>
              <li>
                A sample work from one of our specialized editors, Tsedneya, is{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-200 underline"
                  href="https://docs.google.com/document/d/1TfuxVgVJlVx6pg1fWZtH-n_IzTAOMi9OajUgUBWaNA8/edit?usp=sharing"
                >
                  here
                </a>
              </li>
            </ol>
          </Typography>

          <form
            className="mt-8 w-full flex flex-col gap-8"
            action="https://docs.google.com/forms/d/e/1FAIpQLSf1AWrATso7MTmA_FlLwfyld6-2Sd7hkYK53iiCNipB7Sz-Lw/formResponse"
            method="POST"
            target="_blank"
            onSubmit={validateForm}
          >
            {/* STUDENT INFO */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl underline underline-offset-8">Student</h2>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Your Name
                </Typography>
                <Input
                  inputRef={firstNameRef}
                  name="entry.1736529550"
                  placeholder="First Name"
                  className="p-2 rounded-md"
                />
              </div>

              <div>
                <Input
                  inputRef={lastNameRef}
                  name="entry.648272910"
                  placeholder="Last Name"
                  className="p-2 rounded-md"
                />
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Your Email
                </Typography>
                <Input
                  inputRef={emailRef}
                  name="entry.409026736"
                  placeholder="name@mail.com"
                  className="p-2 rounded-md"
                />
              </div>
            </div>

            {/* ESSAY TYPE SECTION */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl underline underline-offset-8">Essay</h2>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  What is this application for? *
                </Typography>
                <div className="flex flex-col gap-2 text-sm text-gray-200">
                  {[
                    "Activities List & Honors",
                    "Brag Sheet",
                    "Personal Essay",
                    "Supplemental Essay",
                  ].map((label, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="entry.1649624151"
                        value={label}
                        className="accent-yellow-400"
                        required
                        onChange={() => setEssayType(label)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {essayType === "Brag Sheet" && (
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Enter Your Essay (limit: 10,000 characters)
                  </Typography>
                  <Textarea
                    rows={10}
                    name="entry.1874314604"
                    placeholder="Paste your brag sheet here..."
                    required
                    className="rounded-md p-2"
                    onChange={(e) =>
                      setWordCount(e.target.value.trim().split(/\s+/).length)
                    }
                  />
                  <p>Word Count {wordCount}</p>
                </div>
              )}

              {essayType === "Personal Essay" && (
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Personal Essay (limit: 650 words)
                  </Typography>
                  <Textarea
                    rows={10}
                    name="entry.2128284226"
                    placeholder="Paste your personal essay here..."
                    required
                    className="p-2 rounded-md after:content-none"
                    onChange={(e) =>
                      setWordCount(e.target.value.trim().split(/\s+/).length)
                    }
                  />
                  <p>Word Count {wordCount}</p>
                </div>
              )}

              {essayType === "Supplemental Essay" && (
                <div className="flex flex-col gap-4">
                  <Input
                    name="entry.1695463651"
                    placeholder="What school is this for?"
                    required
                    className="p-2 rounded-md after:content-none"
                  />
                  <Input
                    name="entry.231505224"
                    placeholder="What is the prompt?"
                    required
                    className="p-2 rounded-md after:content-none" 
                  />
                  <Input
                    name="entry.334781364"
                    placeholder="What is the character limit?"
                    required
                    className="p-2 rounded-md after:content-none"
                  />
                  <Textarea
                    rows={10}
                    name="entry.1566517753"
                    placeholder="Enter your supplemental essay here..."
                    className="p-2 rounded-md"
                    required
                    onChange={(e) =>
                      setWordCount(e.target.value.trim().split(/\s+/).length)
                    }
                  />
                  <p>Word Count {wordCount}</p>
                </div>
              )}

              {essayType === "Activities List & Honors" && (
                <div className="flex flex-col gap-4">
                  <Typography variant="h6" color="blue-gray">
                    Please format your activities and honors as follows:
                  </Typography>
                  <Textarea
                    name="entry.780968202"
                    rows={10}
                    placeholder="Paste your activities list & honors here (limit: 3500 characters)"
                    required
                    className="p-2 rounded-md"
                    onChange={(e) =>
                      setWordCount(e.target.value.trim().split(/\s+/).length)
                    }
                  />
                  <p>Word Count {wordCount}</p>
                </div>
              )}
            </div>

            {/* REQUEST SECTION */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl underline underline-offset-8">Request</h2>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Turnaround*
                </Typography>
                <div className="flex flex-col gap-2 text-sm text-gray-200">
                  {["Standard <3", "Rush <2", "Express <1"].map(
                    (label2, idx) => (
                      <label key={idx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="entry.1052048417"
                          value={label2}
                          className="accent-yellow-400"
                          required
                          onChange={() => factorSetter(label2)}
                        />
                        {label2}
                      </label>
                    )
                  )}
                </div>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  If interested, please select the specific specialized editor you would like to have edit your essay. 
                </Typography>
                <div className="flex flex-col gap-2 text-sm text-gray-200">
                  {["Tsedneya Asrat", "Medha Chilukuri", "Any"].map(
                    (label2, idx) => (
                      <label key={idx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="entry.1052048417"
                          value={label2}
                          className="accent-yellow-400"
                          required
                          onChange={() => factorSetter(label2)}
                        />
                        {label2}
                      </label>
                    )
                  )}
                </div>
              </div>

              {time && essayType && (
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Price*
                  </Typography>
                  <p>
                    ${Number(wordCount * factor).toFixed(2)}, $
                    {factor.toFixed(2)} per word
                  </p>
                </div>
              )}

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Comments
                </Typography>
                <Input
                  name="entry.358497509"
                  placeholder="Let us know if you have any special requests"
                  className="p-2 rounded-md"
                />
              </div>
            </div>

            {time && essayType && (
              <div>
                  {/* <Checkout wordCount={wordCount} factor={factor} essayType={essayType} /> */}

                {/* <Pay /> */}
              </div>
            )}

            <Button className="mt-6 bg-yellow-400" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </motion.div>
  );
}
