import Link from "next/link";
import { CnbcIcon } from "../navbar/assets/cnbc-icon";
import { CnnIcon } from "../navbar/assets/cnn-icon";
import { EntrepreneurIcon } from "../navbar/assets/entrepreneur-icon";
import { SigmaIcon } from "../navbar/assets/sigma-icon";

export const Featured: React.FC = () => {
  return (
    <section id="featured" className="px-4 py-40 w-full">
      <div className="text-center">
        <span className="text-primary-100 font-bold text-sm border border-primary-100 rounded-sm py-1.5 px-4">
          Featured on
        </span>

        <h2 className="text-3xl font-bold mt-6 mb-10 font-suwannaphum">
          Media about us
        </h2>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-14">
        <NavLink
          href="https://sigma.world/news/how-ai-can-revolutionise-customer-support/
"
        >
          <SigmaIcon />
        </NavLink>

        <NavLink href="https://www.entrepreneur.com/ka/siakhleebi-da-tendentsiebi/kodidan-khelovnur/481310">
          <EntrepreneurIcon />
        </NavLink>

        <NavLink href="https://www.cnnindonesia.com/gaya-hidup/20241108110426-307-1164340/perusahaan-bisa-merevolusi-layanan-pelanggan-melalui-ai-canggih">
          <CnnIcon />
        </NavLink>

        <NavLink href="https://www.cnbcindonesia.com/tech/20241015204543-57-580042/begini-cara-perusahaan-merevolusi-layanan-pelanggan-lewat-ai">
          <CnbcIcon />
        </NavLink>
      </nav>
    </section>
  );
};

const NavLink = ({
  href,
  children,
}: { href: string; children: React.ReactNode }) => {
  return (
    <Link className="rounded-sm" href={href}>
      {children}
    </Link>
  );
};
