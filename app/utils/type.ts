export interface ButtonProps {
  label: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  width?: string;
}

export interface LinkProps {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  width?: string;
  onclick?: () => void;
}
