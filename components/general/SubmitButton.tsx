"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type GeneralSubmitButtonProps = {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  width?: string;
};

export function GeneralSubmitButton({
  text,
  variant,
  width,
}: GeneralSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button variant={variant} className={width}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          <span>{text}</span>
        </>
      )}
    </Button>
  );
}
