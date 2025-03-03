<!-- pages/faq.vue -->
<template>
  <div>
    <!-- Page Header -->
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-white text-xl max-w-3xl">
          Find answers to common questions about Lesstics, our products, and our
          mission to tackle plastic waste.
        </p>
      </div>
    </div>

    <!-- FAQ Categories -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Category 1: About Lesstics -->
          <div
            class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            :class="{ 'border-2 border-green-500': activeCategory === 'about' }"
            @click="activeCategory = 'about'">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4 mx-auto">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 text-center mb-2">
              About Lesstics
            </h3>
            <p class="text-gray-600 text-center">
              Company information and our mission
            </p>
          </div>

          <!-- Category 2: Products & Materials -->
          <div
            class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            :class="{
              'border-2 border-green-500': activeCategory === 'products',
            }"
            @click="activeCategory = 'products'">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4 mx-auto">
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
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 text-center mb-2">
              Products & Materials
            </h3>
            <p class="text-gray-600 text-center">
              Questions about our recycled products
            </p>
          </div>

          <!-- Category 3: Orders & Shipping -->
          <div
            class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            :class="{
              'border-2 border-green-500': activeCategory === 'orders',
            }"
            @click="activeCategory = 'orders'">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4 mx-auto">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 text-center mb-2">
              Orders & Shipping
            </h3>
            <p class="text-gray-600 text-center">
              Purchasing and delivery information
            </p>
          </div>

          <!-- Category 4: Recycling Programs -->
          <div
            class="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            :class="{
              'border-2 border-green-500': activeCategory === 'recycling',
            }"
            @click="activeCategory = 'recycling'">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4 mx-auto">
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 text-center mb-2">
              Recycling Programs
            </h3>
            <p class="text-gray-600 text-center">
              How to participate in our initiatives
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- About Lesstics FAQs -->
        <div v-if="activeCategory === 'about'" class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">About Lesstics</h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('about1')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What is Lesstics?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('about1') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('about1')"
                class="mt-4 text-gray-700">
                <p>
                  Lesstics is a sustainable company dedicated to transforming
                  single-use plastics into valuable resources. We collect
                  plastic waste, process it, and create durable, high-quality
                  products while promoting environmental sustainability and
                  providing economic opportunities for local communities.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('about2')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  When was Lesstics founded?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('about2') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('about2')"
                class="mt-4 text-gray-700">
                <p>
                  Lesstics was founded in 2018 by Jane Cooper after witnessing
                  the devastating impact of plastic pollution in Manila Bay.
                  What started as a small workshop in Jane's garage has now
                  grown into a company with a dedicated manufacturing facility
                  and partnerships across the Philippines.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('about3')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What is Lesstics' mission?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('about3') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('about3')"
                class="mt-4 text-gray-700">
                <p>
                  Our mission is to revolutionize the plastic lifecycle by
                  implementing innovative solutions that transform single-use
                  plastics into valuable resources. We aim to reduce plastic
                  pollution, create sustainable products, and empower local
                  communities through economic opportunities in waste collection
                  and processing.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('about4')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How does Lesstics contribute to sustainability?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('about4') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('about4')"
                class="mt-4 text-gray-700">
                <p>Lesstics contributes to sustainability in multiple ways:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Diverting plastic waste from landfills and oceans</li>
                  <li>Reducing the need for virgin plastic production</li>
                  <li>
                    Creating durable products that replace single-use items
                  </li>
                  <li>
                    Promoting environmental awareness through education and
                    community engagement
                  </li>
                  <li>
                    Providing sustainable livelihoods for local communities
                  </li>
                  <li>
                    Reducing carbon emissions through our efficient production
                    processes
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('about5')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  Does Lesstics work with other organizations?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('about5') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('about5')"
                class="mt-4 text-gray-700">
                <p>
                  Yes, we actively collaborate with various organizations,
                  including:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Local government units for waste collection programs</li>
                  <li>Environmental NGOs for awareness campaigns</li>
                  <li>Businesses for sustainable packaging solutions</li>
                  <li>Educational institutions for research and development</li>
                  <li>
                    Community cooperatives for plastic collection and sorting
                  </li>
                </ul>
                <p class="mt-2">
                  If you're interested in partnering with us, please visit our
                  <NuxtLink to="/contact" class="text-green-600 hover:underline"
                    >Contact page</NuxtLink
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Products & Materials FAQs -->
        <div v-if="activeCategory === 'products'" class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Products & Materials
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('products1')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What types of products does Lesstics offer?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('products1') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('products1')"
                class="mt-4 text-gray-700">
                <p>
                  Lesstics offers a variety of products made from recycled
                  plastic, including:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Home goods (planters, coasters, kitchen utensils)</li>
                  <li>Accessories (tote bags, wallets, keychains)</li>
                  <li>Packaging solutions for businesses</li>
                  <li>Custom products for corporate clients</li>
                </ul>
                <p class="mt-2">
                  Visit our
                  <NuxtLink
                    to="/products"
                    class="text-green-600 hover:underline"
                    >Products page</NuxtLink
                  >
                  to see our full range of offerings.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('products2')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What types of plastic do you use in your products?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('products2') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('products2')"
                class="mt-4 text-gray-700">
                <p>We primarily work with the following types of plastic:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    PET (Polyethylene Terephthalate) - water bottles, food
                    containers
                  </li>
                  <li>
                    HDPE (High-Density Polyethylene) - shampoo bottles, milk
                    jugs
                  </li>
                  <li>
                    LDPE (Low-Density Polyethylene) - plastic bags, squeeze
                    bottles
                  </li>
                  <li>PP (Polypropylene) - bottle caps, food containers</li>
                </ul>
                <p class="mt-2">
                  Each product may use different types of plastic depending on
                  the required properties for durability, flexibility, and
                  appearance.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('products3')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  Are your products safe to use?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('products3') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('products3')"
                class="mt-4 text-gray-700">
                <p>
                  Yes, all of our products are thoroughly tested for safety and
                  durability. We follow strict quality control procedures to
                  ensure that our products are free from harmful chemicals and
                  meet all relevant safety standards.
                </p>
                <p class="mt-2">
                  For food-related items (such as kitchen utensils and food
                  containers), we use only food-grade recycled plastic and
                  ensure they are BPA-free. These products are also tested for
                  heat resistance and durability.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('products4')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How durable are recycled plastic products?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('products4') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('products4')"
                class="mt-4 text-gray-700">
                <p>
                  Our recycled plastic products are designed to be highly
                  durable and long-lasting. In fact, many of our products are
                  more durable than their single-use counterparts. We use
                  specialized processing techniques to enhance the strength and
                  resilience of recycled plastic.
                </p>
                <p class="mt-2">
                  With proper care, our products can last for many years. This
                  durability is part of our commitment to
                  sustainability—products that last longer reduce the need for
                  replacements and further resource consumption.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('products5')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  Can I recycle Lesstics products at the end of their life?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('products5') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('products5')"
                class="mt-4 text-gray-700">
                <p>
                  Yes! All Lesstics products are fully recyclable. When your
                  product reaches the end of its useful life, you can:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Return it to us through our take-back program (available in
                    select areas)
                  </li>
                  <li>
                    Recycle it through local recycling facilities that accept
                    the specific type of plastic
                  </li>
                </ul>
                <p class="mt-2">
                  We're committed to creating a closed-loop system where our
                  products can be recycled repeatedly, further reducing waste
                  and resource consumption.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Orders & Shipping FAQs -->
        <div v-if="activeCategory === 'orders'" class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Orders & Shipping
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('orders1')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How can I purchase Lesstics products?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('orders1') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('orders1')"
                class="mt-4 text-gray-700">
                <p>You can purchase our products through several channels:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Our online store at www.lesstics.com</li>
                  <li>
                    Partner retail stores across the Philippines (see our
                    website for locations)
                  </li>
                  <li>Our physical showroom in Manila</li>
                  <li>
                    Direct orders for bulk purchases (contact our sales team)
                  </li>
                </ul>
                <p class="mt-2">
                  Visit our
                  <NuxtLink
                    to="/products"
                    class="text-green-600 hover:underline"
                    >Products page</NuxtLink
                  >
                  to browse our current offerings.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('orders2')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What payment methods do you accept?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('orders2') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('orders2')"
                class="mt-4 text-gray-700">
                <p>We accept the following payment methods:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Credit/Debit Cards (Visa, Mastercard, American Express)
                  </li>
                  <li>PayPal</li>
                  <li>GCash and other e-wallets (Philippines)</li>
                  <li>Bank transfers</li>
                  <li>Cash on Delivery (select areas in the Philippines)</li>
                </ul>
                <p class="mt-2">
                  All online payments are processed through secure payment
                  gateways to ensure your information is protected.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('orders3')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  Where do you ship to?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('orders3') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('orders3')"
                class="mt-4 text-gray-700">
                <p>
                  We currently ship to all regions within the Philippines and
                  select international destinations in Southeast Asia, including
                  Singapore, Malaysia, Thailand, Vietnam, and Indonesia.
                </p>
                <p class="mt-2">
                  We're continuously expanding our shipping capabilities. If
                  your location is not currently covered, please contact us to
                  inquire about shipping options.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('orders4')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How long will it take to receive my order?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('orders4') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('orders4')"
                class="mt-4 text-gray-700">
                <p>Delivery times depend on your location:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>Metro Manila: 1-3 business days</li>
                  <li>Other areas in the Philippines: 3-7 business days</li>
                  <li>International destinations: 7-14 business days</li>
                </ul>
                <p class="mt-2">
                  These are estimated delivery times. Actual delivery may be
                  affected by factors such as weather conditions, customs
                  processing, or other circumstances beyond our control. You'll
                  receive a tracking number once your order ships so you can
                  monitor its progress.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('orders5')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What is your return policy?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('orders5') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('orders5')"
                class="mt-4 text-gray-700">
                <p>
                  We accept returns of unused products in their original
                  packaging within 14 days of delivery. To initiate a return:
                </p>
                <ol class="list-decimal pl-6 mt-2 space-y-1">
                  <li>Contact our customer service team to request a return</li>
                  <li>
                    Receive a return authorization and shipping instructions
                  </li>
                  <li>Ship the items back to us</li>
                  <li>
                    Once we receive and inspect the returned items, we'll
                    process your refund
                  </li>
                </ol>
                <p class="mt-2">
                  Refunds will be issued to your original payment method within
                  7-14 business days after we receive and inspect the returned
                  items.
                </p>
                <p class="mt-2">
                  Please note that shipping costs for returns are the customer's
                  responsibility unless the return is due to our error (such as
                  damaged or incorrect items).
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recycling Programs FAQs -->
        <div v-if="activeCategory === 'recycling'" class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Recycling Programs
          </h2>

          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('recycling1')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How can I participate in Lesstics' recycling programs?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('recycling1') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('recycling1')"
                class="mt-4 text-gray-700">
                <p>
                  There are several ways you can participate in our recycling
                  programs:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Drop off clean plastic waste at our collection points (see
                    locations on our website)
                  </li>
                  <li>
                    Join community collection drives organized in partnership
                    with local governments
                  </li>
                  <li>
                    For businesses: Partner with us for regular collection of
                    plastic waste
                  </li>
                  <li>
                    For schools and organizations: Host a collection point at
                    your premises
                  </li>
                </ul>
                <p class="mt-2">
                  Visit our
                  <NuxtLink to="/contact" class="text-green-600 hover:underline"
                    >Contact page</NuxtLink
                  >
                  to inquire about specific programs in your area.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('recycling2')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What types of plastic do you accept for recycling?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('recycling2') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('recycling2')"
                class="mt-4 text-gray-700">
                <p>We primarily accept the following types of plastic:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    PET (Polyethylene Terephthalate) - water bottles, soda
                    bottles
                  </li>
                  <li>
                    HDPE (High-Density Polyethylene) - shampoo bottles, milk
                    jugs
                  </li>
                  <li>
                    LDPE (Low-Density Polyethylene) - plastic bags, squeeze
                    bottles
                  </li>
                  <li>PP (Polypropylene) - bottle caps, food containers</li>
                </ul>
                <p class="mt-2">
                  Please ensure all items are clean and free from food residue.
                  Remove labels and caps (but you can include them separately).
                </p>
                <p class="mt-2">
                  We currently do not accept PVC, polystyrene foam (Styrofoam),
                  or multi-layer packaging (like chip bags).
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('recycling3')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  Do you offer incentives for recycling?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('recycling3') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('recycling3')"
                class="mt-4 text-gray-700">
                <p>
                  Yes, we offer various incentives for participating in our
                  recycling programs:
                </p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Points system: Earn points for every kilogram of plastic you
                    recycle, redeemable for Lesstics products
                  </li>
                  <li>
                    Cash incentives: In some communities, we offer cash payments
                    for bulk collections
                  </li>
                  <li>
                    Discounts: Receive discount coupons for Lesstics products
                    when you recycle with us
                  </li>
                  <li>
                    Community benefits: For schools and organizations, we offer
                    educational workshops and funding for environmental projects
                  </li>
                </ul>
                <p class="mt-2">
                  Incentives may vary by location and program. Contact your
                  local collection point for specific details.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('recycling4')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  How can businesses partner with Lesstics for recycling?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('recycling4') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('recycling4')"
                class="mt-4 text-gray-700">
                <p>Businesses can partner with Lesstics in several ways:</p>
                <ul class="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Waste Management Programs: We can help manage and recycle
                    your business's plastic waste
                  </li>
                  <li>
                    Collection Points: Host a collection point at your business
                    location
                  </li>
                  <li>
                    Sustainable Packaging: Transition to our recycled packaging
                    solutions
                  </li>
                  <li>
                    Corporate Social Responsibility: Sponsor recycling
                    initiatives in local communities
                  </li>
                  <li>
                    Custom Products: Commission custom products made from your
                    recycled plastic waste
                  </li>
                </ul>
                <p class="mt-2">
                  To explore partnership opportunities, please contact our
                  business development team at partnerships@lesstics.com or
                  visit our
                  <NuxtLink to="/contact" class="text-green-600 hover:underline"
                    >Contact page</NuxtLink
                  >.
                </p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <button
                @click="toggleFAQ('recycling5')"
                class="flex justify-between items-center w-full text-left">
                <h3 class="text-xl font-semibold text-gray-800">
                  What happens to the plastic after it's collected?
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500 transform transition-transform"
                  :class="{ 'rotate-180': openFAQs.includes('recycling5') }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                v-if="openFAQs.includes('recycling5')"
                class="mt-4 text-gray-700">
                <p>
                  After collection, the plastic goes through our comprehensive
                  recycling process:
                </p>
                <ol class="list-decimal pl-6 mt-2 space-y-1">
                  <li>
                    Sorting: Plastics are sorted by type (PET, HDPE, etc.)
                  </li>
                  <li>Cleaning: Thorough washing to remove contaminants</li>
                  <li>Shredding: Plastic is shredded into small flakes</li>
                  <li>Processing: Flakes are melted and formed into pellets</li>
                  <li>
                    Manufacturing: Pellets are used to create new products
                  </li>
                </ol>
                <p class="mt-2">
                  This process transforms what would have been waste into
                  valuable raw materials for our products. Any plastic that
                  cannot be used in our products is responsibly recycled through
                  partner facilities, ensuring zero waste goes to landfills.
                </p>
                <p class="mt-2">
                  You can learn more about our process on our
                  <NuxtLink to="/about" class="text-green-600 hover:underline"
                    >About page</NuxtLink
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Still Have Questions Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Still Have Questions?
          </h2>
          <p class="text-gray-700 mb-8">
            If you couldn't find the answer to your question, please don't
            hesitate to contact us. Our team is ready to assist you.
          </p>
          <NuxtLink
            to="/contact"
            class="px-8 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition inline-block">
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lant="ts" setup>
const activeCategory = ref("about")
const openFAQs = ref([])

const toggleFAQ = (faqId) => {
  if (openFAQs.value.includes(faqId)) {
    openFAQs.value = openFAQs.value.filter((id) => id !== faqId)
  } else {
    openFAQs.value.push(faqId)
  }
}
</script>
