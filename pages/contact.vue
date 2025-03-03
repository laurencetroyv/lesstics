<!-- pages/contact.vue -->
<template>
  <div>
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p class="text-white text-xl max-w-3xl">
          Have questions or want to learn more about our plastic recycling
          solutions? We'd love to hear from you!
        </p>
      </div>
    </div>

    <!-- Contact Form Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h2>

            <form @submit.prevent="submitForm">
              <div class="mb-6">
                <label for="name" class="block text-gray-700 mb-2"
                  >Your Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required />
              </div>

              <div class="mb-6">
                <label for="email" class="block text-gray-700 mb-2"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required />
              </div>

              <div class="mb-6">
                <label for="subject" class="block text-gray-700 mb-2"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required />
              </div>

              <div class="mb-6">
                <label for="message" class="block text-gray-700 mb-2"
                  >Your Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required></textarea>
              </div>

              <button
                type="submit"
                class="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                :disabled="submitting">
                {{ submitting ? "Sending..." : "Send Message" }}
              </button>

              <div
                v-if="formSubmitted"
                class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-100 p-3 rounded-md mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">
                    Address
                  </h3>
                  <p class="text-gray-600">
                    Matthew Street, Bahayan, Luinab<br />
                    Iligan City, Lanao Del Norte<br />
                    Philippines
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-100 p-3 rounded-md mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">
                    Email
                  </h3>
                  <p class="text-gray-600">
                    <a
                      href="mailto:kennomichael.uy@gmail.com"
                      class="text-green-600 hover:underline"
                      >kennomichael.uy@gmail.com</a
                    >
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-100 p-3 rounded-md mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">
                    Phone
                  </h3>
                  <p class="text-gray-600">
                    <a
                      href="tel:+6391234567890"
                      class="text-green-600 hover:underline"
                      >+63 912 345 6789</a
                    >
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-100 p-3 rounded-md mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">
                    Business Hours
                  </h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 2pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313977.01429924165!2d124.20792146645307!3d8.162744985502565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325579b328c9540d%3A0xe6e208aba2f0d03b!2sIligan%20City%2C%20Lanao%20del%20Norte!5e1!3m2!1sen!2sph!4v1741015369815!5m2!1sen!2sph"
              style="border: 0"
              allowfullscreen=""
              class="mt-8 bg-gray-200 rounded-lg h-64 w-auto flex items-center justify-center text-gray-500"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              How can I participate in your recycling program?
            </h3>
            <p class="text-gray-600">
              You can participate by dropping off your clean plastic waste at
              our collection points or contacting us to arrange a pickup for
              larger quantities.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              What types of plastic do you accept?
            </h3>
            <p class="text-gray-600">
              We primarily focus on single-use plastics like PET bottles,
              plastic bags, and food containers. Please ensure all items are
              clean and free from food residue.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              How can businesses partner with Lesstics?
            </h3>
            <p class="text-gray-600">
              We offer various partnership opportunities for businesses, from
              corporate social responsibility programs to sustainable product
              sourcing. Contact us to discuss how we can work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue"

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const submitting = ref(false)
const formSubmitted = ref(false)

const submitForm = async () => {
  submitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Reset form
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  submitting.value = false
  formSubmitted.value = true

  // Hide success message after 5 seconds
  setTimeout(() => {
    formSubmitted.value = false
  }, 5000)
}
</script>
