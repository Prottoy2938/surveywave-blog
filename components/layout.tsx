import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { useRouter } from "next/router";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const { route } = useRouter();
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {route === "/" && <Alert preview={preview} />}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
