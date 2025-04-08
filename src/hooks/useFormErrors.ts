import { useFormContext } from "react-hook-form";

export function useFormErrors() {
  const { formState: { errors } } = useFormContext();
  
  return {
    getError: (path: string) => {
      const pathParts = path.split('.');
      let current: any = errors;
      
      for (const part of pathParts) {
        if (!current) return undefined;
        current = current[part];
      }
      
      return current?.message;
    }
  };
}