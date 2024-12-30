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


export interface InputProps {
  label: string;
  type: "text" | "password" | "email";
  id: string;
  placeholder: string;
  onchange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value?: string;
  passwordVisibility?: boolean;
  setPasswordVisibility?: (value: boolean) => void;
  disabled?: boolean;
}

export interface AuthProps {
  email: string;
  password: string;
  fullname?: string;
}
