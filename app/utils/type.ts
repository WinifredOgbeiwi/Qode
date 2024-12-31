export interface ButtonProps {
  label: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  width?: string;
  loading?: boolean;
    color?:string;

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

export interface AuthDBProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  experience: string;
  uid: string;
  username: string;
}


export interface User {
  id: string; 
  email: string;
  name?: string;
 
}
export interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}