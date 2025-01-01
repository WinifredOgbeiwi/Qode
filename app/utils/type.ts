import { User as FirebaseUser } from 'firebase/auth';
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

export interface AuthState {
  user: FirebaseUser | null;
  setUser: (user: FirebaseUser | null) => void;
  logout: () => void;
}

export type QodeState = {
  categories: any[];
  quizzes: any[];
  questions: any[];
  selectedCategory: string | null;
  selectedQuiz: string | null;
  setCategories: () => void;
  setQuizzes: (categoryId: string) => void;
  setQuestions: (categoryId: string, quizId: string) => void;
};

export type CategoryProps = {
  selectedCategory: string | null;
  isQuizCompleted: boolean;
  categories:any[];
  setQuizzes:(categoryId: string) => void;
 setCategoryName: (categoryName: string) => void;
}