import { Input } from "../../Components/Input";

export const LoginForm = () => {
  return (
    <form className="w-full">
      <Input inputId="username" placeholder="info@gmail.com" text="Username" />
      <Input inputId="password" placeholder="********" type="password" text="Password" />
      <div className="mb-4 text-right">
        <a
          className="font-inter text-lg leading-[21.78px] text-blue-500"
          href="/forgot-password"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};
