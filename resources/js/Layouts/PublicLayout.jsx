// resources/js/Layouts/PublicLayout.jsx
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Modal from '@/Components/Modal'; // Our generic modal component
import { ModalProvider, useModal } from '@/Context/ModalContext';
import LoginForm from '@/Components/Auth/LoginForm';
import RegisterForm from '@/Components/Auth/RegisterForm';

// We create a new component here to get access to the context
const AppContent = ({ children }) => {
    const { modalState, closeModal } = useModal();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />

            {/* The actual modal that will show/hide */}
             <Modal show={!!modalState} onClose={closeModal}>
                {modalState === 'login' && <LoginForm closeModal={closeModal} />}
                {modalState === 'register' && <RegisterForm closeModal={closeModal} />}
            </Modal>
        </div>
    );
};


// The main export wraps everything in the provider
export default function PublicLayout({ children }) {
    return (
        <ModalProvider>
            <AppContent>{children}</AppContent>
        </ModalProvider>
    );
}