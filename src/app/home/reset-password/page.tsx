import ResetPassword from '@/src/components/features/reset-password/ResetPassword';

type Props = {
  searchParams: Promise<{
    phoneNumber?: string;
    otp?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <ResetPassword
      identifier={params.phoneNumber ?? ''}
      otp={params.otp ?? ''}
    />
  );
}