import LogIn from "@/app/home/login/logInComponent/LogIn";

export const metadata = {
  title: "Login | NirmaanSetu",
  description: "Login to your NirmaanSetu account",
};

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-background">
      <LogIn />
    </section>
  );
}
