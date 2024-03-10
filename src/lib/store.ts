import { writable, type Writable } from "svelte/store";
import { ScrollDirection } from "./enums";

export const curScrollDir: Writable<ScrollDirection> = writable(ScrollDirection.DOWN);