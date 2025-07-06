import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser";

interface StoriesAndInterviewsProps {
    pargraphSize: string;
}

const StoriesAndInterviews = ({ pargraphSize }: StoriesAndInterviewsProps) => {
    const form = useRef<HTMLFormElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const regexMap = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };

    const SendMail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const email = emailRef.current?.value.trim() || "";

        if (email.length > 0 && regexMap.email.test(email)) {
            const templateParams = {
                to_name: email,
                to_email: email,
            };

            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
                    templateParams,
                    import.meta.env.VITE_EMAILJS_USER_ID || ""
                )
                .then(() => {
                    alert("Subscription successful!");
                    form.current?.reset();
                })
                .catch(() => {
                    alert("Failed to send subscription email.");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            alert("Please enter a valid email.");
            setLoading(false);
        }
    };

    return (
        <form ref={form} className="flex flex-col md:flex-row gap-4" onSubmit={SendMail}>
            <div className="w-full">
                <p className="font-semibold text-center tracking-wider text-pink01 leading-6">Newsletters</p>
                <h4 className="text-5xl font-semibold leading-[60px] mt-3 md:text-center">Stories and interviews</h4>
                <p className={`text-[20px] leading-[30px] tracking-wider text-gray01 mt-6 md:text-center lg:mx-auto ${pargraphSize}`}>
                    Subscribe to learn about new product features, the latest in technology, solutions,
                    and updates.
                </p>

                <div className="mt-10 flex flex-col md:items-center">
                    <div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <input type="email" placeholder="Enter your email" ref={emailRef}
                                className="pr-3.5 pl-4 py-3 border border-gray02 rounded-lg placeholder:text-gray01 md:w-[360px]" />
                            <button type="submit" className="font-medium text-white bg-purple01 rounded-lg w-fit px-5 py-3 transition delay-150 duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/50">
                                {loading ? (<span className="inline-block animate-spin text-center"><FiLoader /></span>
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </div>
                        <p className="text-sm mt-3 text-gray01"> We care about your data in our <Link to="#" className="underline">privacy policy</Link></p>
                    </div>
                </div>
            </div>
        </form>);
};

export default StoriesAndInterviews;














