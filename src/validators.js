export const required = value => (
  value ? undefined : 'Required');

export const nonEmpty = value => (
  value.trim() !== '' ? undefined : 'Cannot be empty');

let webRegex = new RegExp('(https://)');
export const webAddress = value => (
  webRegex.test(value) ? undefined : 'Must start with https://');


const hnRegex = new RegExp('^(https://news.ycombinator.com/item?id=)d+$');
export const hnAddress = value => (
  hnRegex.test(value) ? undefined : 'Must be a valid Hacker news address like: https://news.ycombinator.com/item?id=<NUMBER>');
