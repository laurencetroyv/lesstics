<template>
  <section class="relative w-full">
    <!-- Hero Background Image -->
    <div class="w-full h-[600px] relative">
      <img
        src="/videoframe_0.png"
        alt="Plastic waste landfill"
        class="w-full h-full object-cover" />
      <!-- Overlay to darken the image -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Hero Content Container -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="text-center text-white p-10 rounded-lg bg-black bg-opacity-20 backdrop-blur-sm max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Turning Single-Use Plastics into
          <span class="text-green-400">Valuable Resources</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Tackling the global challenge of plastic waste by creating sustainable
          products and empowering communities.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <NuxtLink
            to="/products"
            class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition text-lg font-bold">
            Explore Products
          </NuxtLink>
          <NuxtLink
            to="/our-story"
            class="px-8 py-3 border-2 border-white hover:bg-white hover:text-green-800 text-white rounded-md transition text-lg font-bold">
            Our Story
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">
            25K+
          </div>
          <p class="text-gray-600">Kilograms of plastic recycled</p>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">
            15+
          </div>
          <p class="text-gray-600">Communities impacted</p>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">
            10K+
          </div>
          <p class="text-gray-600">Products created</p>
        </div>
        <div class="p-6">
          <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">
            95%
          </div>
          <p class="text-gray-600">Waste diversion rate</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Mission Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p class="text-xl text-gray-600">
          From changing how we see and handle plastic, we prevent it from
          polluting our environment and create positive change.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-56 bg-green-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24 text-white"
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
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Collect</h3>
            <p class="text-gray-600">
              We work with local communities to collect single-use plastics that
              would otherwise end up in landfills or oceans.
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-56 bg-green-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Transform</h3>
            <p class="text-gray-600">
              We process the collected plastics using innovative techniques to
              create high-quality recycled materials.
            </p>
          </div>
        </div>

        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-56 bg-green-800 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">Create</h3>
            <p class="text-gray-600">
              We design and produce beautiful, functional products that showcase
              the value of recycled plastic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem and Solution Section -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Problem Section -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div
              class="inline-flex items-center px-4 py-1 bg-red-100 text-red-700 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              The Problem
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Plastic Pollution Crisis
            </h2>
            <p class="text-gray-700 mb-6">
              Every year, more than 8 million tons of plastic waste enter our
              oceans, causing devastating effects on marine life, ecosystems,
              and human health.
            </p>
            <p class="text-gray-700 mb-6">
              In regions like the Philippines, where waste management
              infrastructure is limited, the impact is especially severe, with
              plastic waste clogging waterways and polluting beaches.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span
                  >Single-use plastics can take 400+ years to decompose</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Over 90% of plastic is not recycled globally</span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span
                  >Microplastics have been found in human blood and organs</span
                >
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink
                to="/blog/plastic-pollution-crisis"
                class="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
                Learn More
              </NuxtLink>
            </div>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/blogs/future-of-plastic-recycling.jpg"
              alt="Plastic pollution in ocean"
              class="w-full h-auto" />
          </div>
        </div>

        <!-- Solution Section -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/blogs/manufacturing.jpg"
              alt="Plastic recycling solution"
              class="w-full h-auto" />
          </div>
          <div class="order-1 md:order-2">
            <div
              class="inline-flex items-center px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The Solution
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Circular Economy Approach
            </h2>
            <p class="text-gray-700 mb-6">
              At Lesstics, we're creating a circular economy for plastic by
              collecting waste, transforming it into valuable resources, and
              producing durable products that replace single-use items.
            </p>
            <p class="text-gray-700 mb-6">
              Our approach not only prevents plastic from polluting the
              environment but also creates economic opportunities for local
              communities involved in collection and processing.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
                <span
                  >Community-based collection programs provide sustainable
                  livelihoods</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
                <span
                  >Innovative processing methods create high-quality recycled
                  materials</span
                >
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7" />
                </svg>
                <span
                  >Sustainable products show the true value of what was once
                  considered waste</span
                >
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink
                to="/products"
                class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                See Our Products
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Products Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Products
        </h2>
        <p class="text-xl text-gray-600">
          Discover how we transform plastic waste into beautiful, functional
          products for everyday use.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Product 1 -->
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-64 overflow-hidden">
            <img
              src="/logo.png"
              alt="Eco Planter"
              class="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Eco Planter</h3>
            <p class="text-gray-600 mb-4">
              Handcrafted planters made from 100% recycled plastic. Each planter
              diverts approximately 2kg of plastic from landfills.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-green-600">₱499.00</span>
              <NuxtLink
                to="/products"
                class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Product 2 -->
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-64 overflow-hidden">
            <img
              src="/logo.png"
              alt="Upcycled Tote Bag"
              class="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Upcycled Tote Bag
            </h3>
            <p class="text-gray-600 mb-4">
              Stylish, durable tote bags made from plastic waste.
              Water-resistant and designed for everyday use.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-green-600">₱599.00</span>
              <NuxtLink
                to="/products"
                class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Product 3 -->
        <div
          class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
          <div class="h-64 overflow-hidden">
            <img
              src="/logo.png"
              alt="Upcycled Coasters"
              class="w-full h-full object-cover transform hover:scale-105 transition duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">
              Upcycled Coasters (Set of 4)
            </h3>
            <p class="text-gray-600 mb-4">
              Colorful coasters made from mixed plastic waste. Each set features
              unique patterns and colors.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold text-green-600">₱349.00</span>
              <NuxtLink
                to="/products"
                class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/products"
          class="px-8 py-3 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900 transition inline-block">
          View All Products
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Partner section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
        <p class="text-xl text-gray-600">
          Collaborating with organizations that share our vision for a sustainable future.
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
          <img 
            src="/fablab.jpg" 
            alt="Partner logo" 
            class="max-h-12"
          />
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
          <img 
            src="/iligan-city.jpg" 
            alt="Partner logo" 
            class="max-h-12"
          />
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
          <img 
            src="/dost.png" 
            alt="Partner logo" 
            class="max-h-12"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Impact Tracker --><section class="py-16 bg-green-600 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Tracking Our Impact</h2>
            <p class="text-xl mb-8">
              Every product you purchase contributes to positive environmental change. 
              Here's the impact we've made together so far:
            </p>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div class="text-4xl font-bold mb-2">{{ formatNumber(impactData.plasticCollected) }} kg</div>
                <p class="text-green-100">Plastic waste collected</p>
              </div>
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div class="text-4xl font-bold mb-2">{{ formatNumber(impactData.co2Prevented) }} kg</div>
                <p class="text-green-100">CO₂ emissions prevented</p>
              </div>
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div class="text-4xl font-bold mb-2">{{ formatNumber(impactData.communityEmployed) }}</div>
                <p class="text-green-100">Community members employed</p>
              </div>
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div class="text-4xl font-bold mb-2">{{ formatNumber(impactData.productsCreated) }}</div>
                <p class="text-green-100">Products created</p>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="/map-visual.jpg" 
              alt="Impact map visualization" 
              class="rounded-lg shadow-2xl"
            />
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="/impact-tracker.jpg" 
                alt="Impact tracker logo" 
                class="h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const impactData = {
  plasticCollected: 25842,
  co2Prevented: 15321,
  communityEmployed: 387,
  productsCreated: 12734
};

const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};
</script>
