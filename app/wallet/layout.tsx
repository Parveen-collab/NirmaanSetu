import WalletFooter from "@/src/components/features/wallet/WalletFooter"
import WalletHeader from "@/src/components/features/wallet/WalletHeader"

export default function WalletLayout({
    children, }: {
        children: React.ReactNode
    }) {
        return(
            <div>
                <WalletHeader/>
                <main className="flex-1">
                    {children}
                </main>
                <WalletFooter/>
            </div>
        )
}