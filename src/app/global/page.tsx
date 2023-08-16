"use client";

import { computed, observable } from "@legendapp/state";
import { enableLegendStateReact, observer } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";
import Link from "next/link";

enableLegendStateReact();

const person = observable({
  first: "Jane",
  last: "Smith",
});

const full = computed(() => `${person.first.get()} ${person.last.get()}`);
const isOdd = computed(() => full.get().length % 2 === 1);

const Name = () => {
  return (
    <Legend.div
      className$={() =>
        `${
          isOdd.get() ? "text-blue-600" : "text-red-600"
        } text-4xl font-bold flex`
      }
    >
      {full}
    </Legend.div>
  );
};

const First = observer(() => {
  return (
    <div className="flex gap-2">
      <label htmlFor="fname">First Name: </label>
      <input
        id="fname"
        value={person.first.get()}
        onChange={(e) => person.first.set(e.target.value)}
        className="border-2 border-gray-300 rounded-md text-black"
      />
    </div>
  );
});

const Last = observer(() => {
  return (
    <div className="flex gap-2">
      <label htmlFor="lname">Last Name: </label>
      <input
        id="lname"
        value={person.last.get()}
        onChange={(e) => person.last.set(e.target.value)}
        className="border-2 border-gray-300 rounded-md text-black"
      />
    </div>
  );
});

const Global = () => {
  return (
    <div className="flex flex-col gap-2 m-5">
      <div className="mb-5 text-4xl font-bold flex">
        <Link href={"/"} className="font-thin">
          Home
        </Link>
        <span className="font-thin mx-2"> &gt;</span>
        <h1>Global and More Reactivity</h1>
      </div>
      <div className="flex flex-col gap-2">
        <First />
        <Last />
        <Name />
      </div>
    </div>
  );
};

export default Global;
