"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { value: "product-inquiry", label: "Product Inquiry" },
    { value: "technical-support", label: "Technical Support" },
    { value: "quote", label: "Quote Request" },
    { value: "complaint", label: "Complaint" },
    { value: "other", label: "Other" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\-\+\s\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900">
                    📍 Address
                  </h3>
                  <p className="mt-2 text-gray-600">
                    BuildSupply Headquarters
                    <br />
                    123 Industrial Park
                    <br />
                    Construction City, CC 12345
                  </p>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900">
                    📞 Phone
                  </h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="tel:+911234567890"
                      className="hover:text-gray-900"
                    >
                      +91 123-456-7890
                    </a>
                  </p>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900">
                    ✉️ Email
                  </h3>
                  <p className="mt-2 text-gray-600">
                    <a
                      href="mailto:info@buildsupply.com"
                      className="hover:text-gray-900"
                    >
                      info@buildsupply.com
                    </a>
                  </p>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold text-gray-900">
                    🕒 Business Hours
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="text-6xl">✓</div>
                    <h3 className="mt-4 text-2xl font-bold text-green-600">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        error={errors.name}
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        error={errors.email}
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 123-456-7890"
                        error={errors.phone}
                      />
                      <Select
                        label="Subject"
                        name="subject"
                        options={subjectOptions}
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Select a subject"
                        error={errors.subject}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={6}
                        className={`mt-2 w-full rounded-lg border ${
                          errors.message
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
                          errors.message
                            ? "focus:ring-red-500"
                            : "focus:ring-gray-900"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-600">
                      We typically respond within 24 hours. Your information will be kept confidential.
                    </p>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
