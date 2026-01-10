import { actions, isInputError } from "astro:actions";
import { useState, type FormEvent } from "react";

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // 1. Capture the form element immediately
        const formElement = event.currentTarget;

        console.log("Submitting...")
        setIsSubmitting(true);
        setErrors(null);
        setSuccessMessage(null);

        // 2. Use the captured form element for FormData
        const formData = new FormData(formElement);
        const { data, error } = await actions.contact(formData);

        setIsSubmitting(false);

        if (error) {
            if (isInputError(error)) {
                setErrors(error.fields);
            }
            return;
        }

        if (data?.success) {
            // 3. Use the captured reference to reset
            formElement.reset();
            setSuccessMessage("Thanks for reaching out! I'll get back to you soon.");
        }
    }

    return (
        <div className="border-2 p-6 bg-paper-dim relative">
            {/* Drawing compass icon */}
            <div className="absolute -top-6 -right-6 w-16 h-16 opacity-20">
                <svg viewBox="0 0 64 64" className="text-[#8b6f47]">
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                    />
                    <line
                        x1="32"
                        y1="8"
                        x2="32"
                        y2="56"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <line
                        x1="8"
                        y1="32"
                        x2="56"
                        y2="32"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                    <circle cx="32" cy="32" r="4" fill="currentColor" />
                </svg>
            </div>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 text-green-800">
                    {successMessage}
                </div>
            )}

            {errors && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 text-red-800">
                    <p className="font-semibold">Please fix the following errors:</p>
                    <ul className="mt-2 text-sm">
                        {Object.entries(errors).map(([field, messages]) => (
                            <li key={field}>
                                • {field}: {messages?.[0]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                    <label htmlFor="name" className="block mb-2">
                        NAME
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border-2 p-3 bg-[#faf8f3] focus:outline-none focus:border-[#8b6f47] transition-colors"
                        required
                        minLength={1}
                        maxLength={100}
                        disabled={isSubmitting}
                    />
                    {/* Sketch underline */}
                    <svg className="w-full h-1 -mt-1" viewBox="0 0 400 4">
                        <path
                            d="M 0 2 L 400 2"
                            stroke="#8b6f47"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.2"
                            strokeDasharray="2,2"
                        />
                    </svg>
                </div>

                {/* Email field */}
                <div>
                    <label htmlFor="email" className="block mb-2">
                        EMAIL
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-2 p-3 bg-[#faf8f3] focus:outline-none focus:border-[#8b6f47] transition-colors"
                        required
                        maxLength={100}
                        disabled={isSubmitting}
                    />
                    <svg className="w-full h-1 -mt-1" viewBox="0 0 400 4">
                        <path
                            d="M 0 2 L 400 2"
                            stroke="#8b6f47"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.2"
                            strokeDasharray="2,2"
                        />
                    </svg>
                </div>

                {/* Message field */}
                <div>
                    <label htmlFor="message" className="block mb-2">
                        MESSAGE
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full border-2 p-3 bg-[#faf8f3] focus:outline-none focus:border-[#8b6f47] transition-colors resize-none"
                        required
                        minLength={10}
                        maxLength={1000}
                        disabled={isSubmitting}
                    />
                    <svg className="w-full h-1 -mt-1" viewBox="0 0 400 4">
                        <path
                            d="M 0 2 L 400 2"
                            stroke="#8b6f47"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.2"
                            strokeDasharray="2,2"
                        />
                    </svg>
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border-2 border-ink py-3 bg-ink text-paper-dim
                         hover:bg-[#4a3d2a] cursor-pointer transition-colors
                         shadow-[4px_4px_0px_rgba(44,36,22,0.3)]
                         active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_rgba(44,36,22,0.3)]
                         flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M 3 3 L 17 10 L 3 17 L 6 10 L 3 3 Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinejoin="round"
                        />
                        <line
                            x1="6"
                            y1="10"
                            x2="17"
                            y2="10"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>
                </button>

                {/* Form note */}
                <div className="text-xs text-[#8b6f47] text-center opacity-70">
                    * I'll get back to you within 24-48 hours
                </div>
            </form>
        </div>
    );
}
