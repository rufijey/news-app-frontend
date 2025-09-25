import AdSlot from "../components/UI/AdSlot.tsx";
import LoginForm from "../components/auth/LoginForm.tsx";

export default function LoginPage() {
    return (
        <div className="flex flex-grow gap-4 p-6">
            <div className="flex-none">
                <AdSlot code="ad-frame" />
            </div>

            <main className="flex-grow">
                <div className="flex justify-center">
                    <LoginForm />
                </div>
            </main>

            <div className="flex-none">
                <AdSlot code="ad-frame1" />
            </div>
        </div>
    );
}
