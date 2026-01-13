'use client';

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        setSubscribed(true);

        setTimeout(() => {
            setEmail('');
            setSubscribed(false);
        }, 3000);
    };

    return (
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12">
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5487EE]/10 rounded-2xl mb-6">
                    <Icon name="Mail" size={32} color="var(--color-primary)" />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                    Stay Ahead in Sales Intelligence
                </h2>

                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    Get weekly insights on audio-first sales strategies, event preparation
                    guides, and conversation optimization tips delivered to your inbox.
                </p>

                {!subscribed ? (
                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
                    >
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="flex-1"
                        />

                        <Button
                            type="submit"
                            variant="default"
                            size="lg"
                            className="cta-gradient whitespace-nowrap flex items-center gap-2"
                        >
                            Subscribe
                            <Icon name="Send" size={16} />
                        </Button>

                    </form>
                ) : (
                    <div className="flex items-center justify-center gap-2 text-[#10B981] bg-[#10B981]/10 px-6 py-4 rounded-xl max-w-xl mx-auto">
                        <Icon name="CheckCircle" size={24} />
                        <span className="font-medium">
                            Successfully subscribed! Check your inbox.
                        </span>
                    </div>
                )}

                <p className="text-sm text-slate-500 mt-4">
                    Join 5,000+ sales professionals. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export default NewsletterSection;
