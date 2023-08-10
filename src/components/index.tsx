import { lazy } from "react";

import Button from "./Button";
const Loading = lazy(async () => await import("./Loading"));

export { Button, Loading };
