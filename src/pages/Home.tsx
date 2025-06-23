import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";

export default function Home() {
    return(
        <div>
            <Layout>
                <Hero />
                {/* Aquí puedes agregar más secciones */}
            </Layout>
        </div>
    );
}