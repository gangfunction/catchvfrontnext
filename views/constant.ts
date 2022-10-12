import { ValidateRule } from "../types/common";

export const RequireRule: ValidateRule = {
  rule: /.+/m,
  match: true,
  message: "it is required",
};
export const NotAllowWhiteSpace: ValidateRule = {
  rule: /\s/,
  match: false,
  message: "it is not allowed whitespace",
};
export const NotAllowStartWithNumber: ValidateRule = {
  rule: /^\d/,
  match: false,
  message: "it is not allowed start with number",
};
