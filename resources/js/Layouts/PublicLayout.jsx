// resources/js/Layouts/PublicLayout.jsx
import Header from '@/Components/Header';
import Footer from '@/Components/Footer'; // Assuming you created Footer.jsx

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer /> {/* Your footer component */}
        </div>
    );
}