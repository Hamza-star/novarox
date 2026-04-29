'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Reusing the contact API or creating a new one for newsletter
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: 'Newsletter',
                    lastName: 'Subscriber',
                    email: email,
                    message: 'New newsletter subscription request.'
                }),
            });

            if (response.ok) {
                toast.success('Thank you for subscribing!');
                setEmail('');
            } else {
                toast.error('Failed to subscribe.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            toast.error('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-primary py-12">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Stay Updated with Marketing Trends
                        </h2>
                        <p className="text-white/80 text-lg">
                            Get the latest insights on Meta & Google Ads directly in your inbox. No spam, just value.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full" data-aos="fade-left">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-grow px-6 py-4 rounded-lg focus:outline-none text-midnight_text"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-midnight_text text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Subscribing...' : 'Subscribe Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
