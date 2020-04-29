import { useState, Dispatch, SetStateAction } from "react";

export function useStatus(): [
  { isLoading: boolean; error: null | any },
  Dispatch<SetStateAction<boolean>>,
  Dispatch<any>
] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);

  return [{ isLoading, error }, setIsLoading, setError];
}
