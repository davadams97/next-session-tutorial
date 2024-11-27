import {signup} from "@/app/actions/auth";

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                action={signup}
                className="p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-1"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-1"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                    Sign Up
                </button>

                <p className="text-center text-sm text-white mt-4">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
                </p>
            </form>
        </div>
    );
}