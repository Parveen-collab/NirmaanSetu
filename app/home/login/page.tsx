import LogIn from "@/src/components/ui/logInComponent/LogIn";

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
