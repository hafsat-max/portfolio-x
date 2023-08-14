import Login from "@/component/login/login";
import LoginHeader from "@/component/login/login-header";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-white dark:bg-[#0b1437] justify-center items-center">
      <LoginHeader />
      <Login />
    </main>
  );
}
