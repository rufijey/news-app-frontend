import AdSlot from "../components/UI/AdSlot.tsx";
import RegisterForm from "../components/auth/RegisterForm.tsx";

export default function RegisterPage() {
    return (
        <div className="flex flex-grow gap-4 p-6">
            <div className="flex-none">
                <AdSlot code="ad-frame" />
            </div>

            <main className="flex-grow">
                <div className="flex justify-center">
                    <RegisterForm />
                </div>
            </main>

            <div className="flex-none">
                <AdSlot code="ad-frame1" />
            </div>
        </div>
    );
}
