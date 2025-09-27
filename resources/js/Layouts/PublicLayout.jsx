// resources/js/Layouts/PublicLayout.jsx
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Modal from '@/Components/Modal';
import { ModalProvider, useModal } from '@/Context/ModalContext';
import LoginForm from '@/Components/Auth/LoginForm';
import RegisterForm from '@/Components/Auth/RegisterForm';
import { useState, useEffect } from 'react'; // <-- Import hooks
import BackToTopButton from '@/Components/BackToTopButton'; // <-- Import our new button

// The inner component that handles layout and modals
const AppContent = ({ children }) => {
    const { modalState, closeModal } = useModal();
    
    // --- STATE FOR BACK TO TOP BUTTON ---
    const [isVisible, setIsVisible] = useState(false);

    // --- LOGIC FOR SCROLLING ---
    const toggleVisibility = () => {
        // Show button if page is scrolled more than 300px
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup function to remove the listener
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />

            <BackToTopButton isVisible={isVisible} onClick={scrollToTop} />

            <Modal show={!!modalState} onClose={closeModal}>
                {modalState === 'login' && <LoginForm closeModal={closeModal} />}
                {modalState === 'register' && <RegisterForm closeModal={closeModal} />}
            </Modal>
        </div>
    );
};

// The main export wraps everything in the ModalProvider
export default function PublicLayout({ children }) {
    return (
        <ModalProvider>
            <AppContent>{children}</AppContent>
        </ModalProvider>
    );
}