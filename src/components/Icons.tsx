"use client";

// Phosphor icons re-exported through a client boundary.
// Importing the package's ESM directly into Server Components fails under
// Turbopack SSR (React 19 react-server condition strips createContext from
// the namespace import), so icons always cross the client boundary here.
export { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
export { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
export { List } from "@phosphor-icons/react/dist/csr/List";
export { X } from "@phosphor-icons/react/dist/csr/X";
export { PaperPlaneTilt } from "@phosphor-icons/react/dist/csr/PaperPlaneTilt";
export { Check } from "@phosphor-icons/react/dist/csr/Check";
