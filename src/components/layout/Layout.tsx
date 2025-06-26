import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col text-white">
            <Navbar />
            <main className="flex-grow w-full p-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}