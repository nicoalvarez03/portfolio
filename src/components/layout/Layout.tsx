import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col text-white min-h-screen w-screen">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}