export type PollingFunctionReturn<T> = {
  breakPoll: Boolean;
  data?: T;
};
