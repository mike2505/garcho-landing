import { FacebookIcon } from "@/assets/facebook-icon";
import { LinkedInIcon } from "@/assets/linkedin-icon";
import { LogoIcon } from "@/assets/logo-icon";
import { TwitterIcon } from "@/assets/twitter-icon";
import { Link } from "../link";
import { Logo } from "../logo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1400px] py-20 px-4 flex flex-wrap gap-20 justify-between">
      <div>
        <div className="grid items-center gap-2 font-bold text-xl mb-5">
        <Logo />
        </div>
        <p className="text-secondary-300 max-w-[600px]">
          Garcho is a cutting-edge AI platform designed to revolutionize customer
          support. With customizable AI agents and seamless third-party
          integration, Garcho helps businesses across various industries deliver
          exceptional customer experiences.
        </p>
      </div>

      {/* <div className="self-end flex flex-wrap gap-20 items-center">
        <FooterNav />

        <Socials />
      </div> */}
    </footer>
  );
};

const FooterNav: React.FC = () => {
  return (
    <nav aria-label="footer" className="flex flex-wrap gap-8">
      <Link className="hover:underline" href="/privacy-policy">
        Privacy Policy
      </Link>
      <Link className="hover:underline" href="/terms">
        Terms
      </Link>
    </nav>
  );
};

const Socials: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="https://facebook.com/Garchoai" aria-label="Facebook">
        <FacebookIcon />
      </Link>

      <Link href="https://twitter.com/Garchoai" aria-label="Twitter">
        <TwitterIcon />
      </Link>
      <Link href="https://linkedin.com/company/Garchoai" aria-label="LinkedIn">
        <LinkedInIcon />
      </Link>
    </div>
  );
};
