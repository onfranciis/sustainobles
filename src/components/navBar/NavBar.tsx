import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-[100px] py-3 ">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Sustainobles logo"
          width={196}
          height={46}
        />
      </Link>

      <div className="flex items-center justify-center gap-24">
        <div className="flex items-center justify-center gap-5">
          <Link href="/" className="btn ">
            <p>Home</p>
          </Link>

          <Link href="/about" className="btn ">
            <p>About us</p>
          </Link>

          <Link href="/projects" className="btn flex items-center gap-1">
            <p>Projects</p>
            <Image src="/arrow-down.svg" alt="" width={20} height={20} />
          </Link>

          <Link href="" className="btn ">
            <p>Gallery</p>
          </Link>

          <Link href="" className="btn ">
            <p>Blog</p>
          </Link>
        </div>

        <Link href="" className="btn bg-secondary font-semibold">
          <p className="text-primary px-7">Donate</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
