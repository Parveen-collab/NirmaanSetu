'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-muted mb-6">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const label = segment.replace("-", " ");

        return (
          <span key={href}>
            {" "}›{" "}
            {index === segments.length - 1 ? (
              <span className="capitalize text-foreground">{label}</span>
            ) : (
              <Link href={href} className="capitalize hover:text-primary">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
