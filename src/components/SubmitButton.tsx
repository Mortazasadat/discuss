import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children: React.ReactNode;
}

function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button color="primary" type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
export default SubmitButton;
