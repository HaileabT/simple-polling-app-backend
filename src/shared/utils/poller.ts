import { PollingFunctionReturn } from "./types";

type PollFunctionOptions = {
  messageBetweenEachPoll: string;
  messageWhenPollIsSuccessful: string;
};
export const poll = async <T>(
  pollingFunction: () => PollingFunctionReturn<T>,
  delayBetweenPolls: number,
  maxPollingAge: number,
  options: PollFunctionOptions
): Promise<T> => {
  let pollCount = 0;

  return new Promise((resolve, reject) => {
    let interval = setInterval(() => {
      if (pollCount * delayBetweenPolls > maxPollingAge) {
        clearInterval(interval);
        reject();
      }
      console.log(options.messageBetweenEachPoll);
      const pollReturn = pollingFunction();
      if (pollReturn.breakPoll) {
        clearInterval(interval);
        console.log(options.messageWhenPollIsSuccessful);
        resolve(pollReturn.data as T);
      }
      pollCount++;
    }, delayBetweenPolls);
  });
};
