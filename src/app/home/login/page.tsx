import LogIn from "@/src/components/features/logIn/LogIn";

export const metadata = {
  title: "Login | NirmaanSetu",
  description: "Login to your NirmaanSetu account",
};

export default function LoginPage() {
  return (
    <section className="bg-background">
      <LogIn />
    </section>
  );
}
