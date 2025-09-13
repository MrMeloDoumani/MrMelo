'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CategoryGrid from './CategoryGrid';

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  userType: z.enum(['b2b', 'b2c']).refine(val => val, {
    message: 'Please select your user type'
  }),
  company: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  }),
  agreeToMarketing: z.boolean().optional()
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSubmit: (data: SignupFormData & { selectedCategories: string[] }) => void;
  isLoading?: boolean;
}

export default function SignupForm({ onSubmit, isLoading = false }: SignupFormProps) {
  const [currentStep, setCurrentStep] = useState<'form' | 'categories'>('form');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [userType, setUserType] = useState<'b2b' | 'b2c'>('b2b');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const watchedUserType = watch('userType');

  const handleFormSubmit = (data: SignupFormData) => {
    if (currentStep === 'form') {
      setUserType(data.userType);
      setCurrentStep('categories');
    } else {
      onSubmit({ ...data, selectedCategories });
    }
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  if (currentStep === 'categories') {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif mb-4">Choose Your Knowledge Domains</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Select up to 4 areas where you&apos;d like expert guidance. You can always adjust these later in your dashboard.
          </p>
        </div>

        <CategoryGrid
          userType={userType}
          selectedCategories={selectedCategories}
          onCategorySelect={setSelectedCategories}
        />

        <div className="flex items-center justify-between mt-12">
          <button
            type="button"
            onClick={handleBackToForm}
            className="flex items-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Details
          </button>

          <button
            type="button"
            onClick={handleSubmit(handleFormSubmit)}
            disabled={selectedCategories.length === 0 || isLoading}
            className="btn-ripple rounded-full bg-[color:var(--accent)] text-black px-8 py-4 text-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Complete Registration'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif mb-4">Join Mr. Melo</h2>
        <p className="text-foreground/80">
          Start your journey to expert knowledge and strategic insights.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className={`w-full px-4 py-3 bg-black/40 border rounded-lg focus:outline-none focus:border-[color:var(--accent)] text-white placeholder-foreground/60 ${
                errors.firstName ? 'border-red-500' : 'border-[color:var(--sand)]'
              }`}
              placeholder="John"
              disabled={isLoading}
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className={`w-full px-4 py-3 bg-black/40 border rounded-lg focus:outline-none focus:border-[color:var(--accent)] text-white placeholder-foreground/60 ${
                errors.lastName ? 'border-red-500' : 'border-[color:var(--sand)]'
              }`}
              placeholder="Doe"
              disabled={isLoading}
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={`w-full px-4 py-3 bg-black/40 border rounded-lg focus:outline-none focus:border-[color:var(--accent)] text-white placeholder-foreground/60 ${
              errors.email ? 'border-red-500' : 'border-[color:var(--sand)]'
            }`}
            placeholder="john.doe@example.com"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* User Type */}
        <div>
          <label className="block text-sm font-medium mb-3">
            How do you identify? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                {...register('userType')}
                type="radio"
                value="b2b"
                className="mr-3 h-4 w-4 text-[color:var(--accent)] focus:ring-[color:var(--accent)] border-[color:var(--sand)]"
                disabled={isLoading}
              />
              <span className="text-sm">
                <strong>Business Professional</strong> - CEO, entrepreneur, executive, or business owner
              </span>
            </label>
            <label className="flex items-center">
              <input
                {...register('userType')}
                type="radio"
                value="b2c"
                className="mr-3 h-4 w-4 text-[color:var(--accent)] focus:ring-[color:var(--accent)] border-[color:var(--sand)]"
                disabled={isLoading}
              />
              <span className="text-sm">
                <strong>Individual User</strong> - Personal development, lifestyle, and individual growth
              </span>
            </label>
          </div>
          {errors.userType && (
            <p className="text-red-400 text-sm mt-1">{errors.userType.message}</p>
          )}
        </div>

        {/* Company (conditional for B2B) */}
        {watchedUserType === 'b2b' && (
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-black/40 border border-[color:var(--sand)] rounded-lg focus:outline-none focus:border-[color:var(--accent)] text-white placeholder-foreground/60"
              placeholder="Your company name"
              disabled={isLoading}
            />
          </div>
        )}

        {/* Terms and Marketing */}
        <div className="space-y-4">
          <div>
            <label className="flex items-start space-x-3">
              <input
                {...register('agreeToTerms')}
                type="checkbox"
                className="mt-1 h-4 w-4 text-[color:var(--accent)] focus:ring-[color:var(--accent)] border-[color:var(--sand)] rounded"
                disabled={isLoading}
              />
              <span className="text-sm text-foreground/80">
                I agree to the{' '}
                <a href="/terms-of-service" className="text-[color:var(--accent)] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-[color:var(--accent)] hover:underline">
                  Privacy Policy
                </a>
                *
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-start space-x-3">
              <input
                {...register('agreeToMarketing')}
                type="checkbox"
                className="mt-1 h-4 w-4 text-[color:var(--accent)] focus:ring-[color:var(--accent)] border-[color:var(--sand)] rounded"
                disabled={isLoading}
              />
              <span className="text-sm text-foreground/80">
                I agree to receive marketing communications and product updates
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="w-full btn-ripple rounded-full bg-[color:var(--accent)] text-black px-6 py-4 text-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting || isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
              Processing...
            </>
          ) : (
            'Continue to Category Selection'
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-foreground/60">
          Already have an account?{' '}
          <a href="/login" className="text-[color:var(--accent)] hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}

