import { ModalProvider } from "@/components/modal/contexts/modal-context";
import { TanstackQueryProvider } from "./tanstack-query";

type Props = {
  children: React.ReactNode;
};

export const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <ModalProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ModalProvider>
  );
};
