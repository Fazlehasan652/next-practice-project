import Link from "next/link";
import Image from "next/image";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav sticky top-0 z-50">
      <ul className="nav-upper flex-space-around hover:text-amber-50">
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link className="" href="/">
            Home
          </Link>
        </li>

        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link href="/services">Service</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link href="/about">About</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li className="nav__list ">
          <Link href="/cart">
            <i className="bi bi-cart3 text-4xl hover:text-fuchsia-500"></i>
          </Link>
        </li>
        <div className="flex justify-center items-center gap-4 text-lg">
          <li className="nav__list ">
            <Link href="/login">Login</Link>
          </li>
          <li className="nav__list ">
            <Link href="/signup">SignUp</Link>
          </li>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-1.5 justify-center items-center">
              <li className="nav__list">
                <Link href="/profile">
                  <div className="profile-icon-role ring-amber-300 w-full h-full relative ">
                    <Image
                      // width={500}
                      // height={500}
                      fill={true}
                      src="/assets/DSC_0264.JPG"
                      // src="/assets/logo.jpg"
                      alt="profile icon"
                      className=" transition hover:duration-300 ease-in  "
                    />
                  </div>
                </Link>
              </li>
              <small className="text-[13px] text-white font-semibold italic">
                Admin
                {/* {role} */}
              </small>
            </div>
            <li className="nav__list ">
              <Link href="/login">
                <button
                  className="bg-orange-600 py-[2px] px-[10px]  mt-1 rounded hover:bg-orange-700 "
                  // onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              </Link>
            </li>
          </div>

          <li className="nav__list">
            <Link href="/about">
              <div className="profile-icon ring-amber-300 ring-1 relative rounded-full">
                <Image
                  // width={50}
                  // height={50}
                  fill={true}
                  src="/assets/logo.jpg"
                  alt="profile icon"
                  className="rounded-full"
                />
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
