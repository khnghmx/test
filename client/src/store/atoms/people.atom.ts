import { Person } from "@app-types/people";
import { atomWithStorage } from "jotai/utils";

export const peopleAtom = atomWithStorage<Person[]>("people-list", []);
