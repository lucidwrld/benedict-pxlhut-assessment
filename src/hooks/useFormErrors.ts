import { useFormContext, FieldErrors } from "react-hook-form";

export function useFormErrors() {
  const {
    formState: { errors },
  } = useFormContext();

  return {
    getError: (path: string) => {
      const pathParts = path.split(".");
      let current: FieldErrors = errors;

      for (const part of pathParts) {
        if (!current) return undefined;
        current = current[part] as FieldErrors;
      }

      return (current as { message?: string })?.message;
    },
  };
}
