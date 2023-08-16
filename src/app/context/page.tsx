"use client";
import { Observable, ObservableComputed } from "@legendapp/state";
import {
  useComputed,
  useObservable,
  enableLegendStateReact,
  observer,
} from "@legendapp/state/react";
import Link from "next/link";
import { createContext, useContext } from "react";

enableLegendStateReact();

const PersonProvider = createContext<{
  first: Observable<string>;
  last: Observable<string>;
  full: ObservableComputed<string>;
} | null>(null);
const usePerson = () => useContext(PersonProvider);

const Name = () => {
  const { full } = usePerson();
  return <div>{full}</div>;
};

const First = observer(() => {
  const { first } = usePerson();
  return (
    <div className="flex gap-2">
      <label htmlFor="fname">First Name: </label>
      <input
        id="fname"
        value={first.get()}
        onChange={(e) => first.set(e.target.value)}
        className="border-2 border-gray-300 rounded-md text-black"
      />
    </div>
  );
});

const Last = observer(() => {
  const { last } = usePerson();
  return (
    <div className="flex gap-2">
      <label htmlFor="lname">Last Name: </label>
      <input
        id="lname"
        value={last.get()}
        onChange={(e) => last.set(e.target.value)}
        className="border-2 border-gray-300 rounded-md text-black"
      />
    </div>
  );
});

const InnerContainer = () => {
  return (
    <div className="flex flex-col gap-2">
      <First />
      <Last />
      <Name />
    </div>
  );
};

const OuterContainer = () => <InnerContainer />;

const FormContainer = () => {
  const first = useObservable("Jane");
  const last = useObservable("Smith");
  const full = useComputed(() => `${first.get()} ${last.get()}`);

  return (
    <PersonProvider.Provider
      value={{
        first,
        last,
        full,
      }}
    >
      <OuterContainer />
    </PersonProvider.Provider>
  );
};

const ContextAndComputed = () => {
  return (
    <div className="flex flex-col gap-2 m-5">
      <div className="mb-5 text-4xl font-bold flex">
        <Link href={"/"} className="font-thin">
          Home
        </Link>
        <span className="font-thin mx-2"> &gt;</span>
        <h1>Context and Computed</h1>
      </div>
      <FormContainer />
      <div className="mt-10">
        <FormContainer />
      </div>
    </div>
  );
};
export default ContextAndComputed;
