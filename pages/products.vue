<!-- pages/products.vue -->
<template>
  <div>
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">Our Products</h1>
        <p class="text-white text-xl max-w-3xl">
          Discover how we transform plastic waste into beautiful, functional,
          and sustainable products.
        </p>
      </div>
    </div>

    <!-- Product Categories Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Category 1 -->
          <div
            class="relative rounded-lg overflow-hidden cursor-pointer group"
            @click="selectedCategory = 'home-goods'">
            <img
              src="/products/plastic-goods.jpg"
              alt="Home goods category"
              class="w-full h-64 object-cover transition group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 class="text-2xl font-bold text-white">Home Goods</h3>
            </div>
            <div
              :class="{
                'absolute bottom-0 left-0 w-full h-1 bg-green-500':
                  selectedCategory === 'home-goods',
              }"></div>
          </div>

          <!-- Category 2 -->
          <div
            class="relative rounded-lg overflow-hidden cursor-pointer group"
            @click="selectedCategory = 'accessories'">
            <img
              src="/products/plastic-accessories.jpg"
              alt="Accessories category"
              class="w-full h-64 object-cover transition group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 class="text-2xl font-bold text-white">Accessories</h3>
            </div>
            <div
              :class="{
                'absolute bottom-0 left-0 w-full h-1 bg-green-500':
                  selectedCategory === 'accessories',
              }"></div>
          </div>

          <!-- Category 3 -->
          <div
            class="relative rounded-lg overflow-hidden cursor-pointer group"
            @click="selectedCategory = 'packaging'">
            <img
              src="/products/packaging.jpg"
              alt="Packaging category"
              class="w-full h-64 object-cover transition group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 class="text-2xl font-bold text-white">Packaging Solutions</h3>
            </div>
            <div
              :class="{
                'absolute bottom-0 left-0 w-full h-1 bg-green-500':
                  selectedCategory === 'packaging',
              }"></div>
          </div>
        </div>

        <!-- Product Listings -->
        <div v-if="selectedCategory === 'home-goods'">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Home Goods</h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Product 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic planter"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Eco Planter
                </h3>
                <p class="text-gray-600 mb-4">
                  Handcrafted planters made from 100% recycled plastic waste.
                  Each planter diverts approximately 2kg of plastic from
                  landfills.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600">₱499.00</span>
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic coasters"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Upcycled Coasters (Set of 4)
                </h3>
                <p class="text-gray-600 mb-4">
                  Colorful coasters made from mixed plastic waste. Each set
                  features unique patterns and colors, making them
                  one-of-a-kind.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600">₱349.00</span>
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic utensils"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Eco Kitchen Utensils
                </h3>
                <p class="text-gray-600 mb-4">
                  Durable kitchen utensils made from high-grade recycled
                  plastic. Heat-resistant and dishwasher-safe.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600">₱699.00</span>
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="selectedCategory === 'accessories'">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">Accessories</h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Product 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic tote bag"
                class="w-full h-64 object-cover" />
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
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic wallet"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Eco Wallet</h3>
                <p class="text-gray-600 mb-4">
                  Minimalist wallets made from upcycled plastic. Lightweight,
                  slim, and perfect for carrying your essentials.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600">₱449.00</span>
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic keychain"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Upcycled Keychains
                </h3>
                <p class="text-gray-600 mb-4">
                  Colorful, unique keychains handcrafted from plastic waste.
                  Each keychain is one-of-a-kind.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600">₱199.00</span>
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="selectedCategory === 'packaging'">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Packaging Solutions
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Product 1 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic packaging boxes"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Eco Packaging Boxes
                </h3>
                <p class="text-gray-600 mb-4">
                  Sustainable packaging solutions for businesses. Made from 100%
                  recycled plastic and fully recyclable.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600"
                    >Contact for pricing</span
                  >
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic food containers"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Food Containers
                </h3>
                <p class="text-gray-600 mb-4">
                  Eco-friendly food containers for restaurants and food
                  businesses. Microwave-safe and durable.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600"
                    >Contact for pricing</span
                  >
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Recycled plastic shipping materials"
                class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Shipping Materials
                </h3>
                <p class="text-gray-600 mb-4">
                  Sustainable shipping materials for e-commerce businesses.
                  Reduce your environmental footprint.
                </p>
                <div class="flex justify-between items-center">
                  <span class="text-lg font-bold text-green-600"
                    >Contact for pricing</span
                  >
                  <button
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Environmental Impact
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-gray-700 mb-6">
              Every product you purchase from Lesstics has a positive impact on
              the environment. We track the amount of plastic waste diverted
              from landfills and oceans with each item.
            </p>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Plastic Diverted
                  </h3>
                  <p class="text-gray-600">
                    Each product diverts between 0.5kg to 5kg of plastic waste.
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Reduced Carbon Footprint
                  </h3>
                  <p class="text-gray-600">
                    Our production process emits 70% less carbon than virgin
                    plastic.
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    Community Support
                  </h3>
                  <p class="text-gray-600">
                    We employ local communities in plastic collection, creating
                    sustainable livelihoods.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/trends.jpg"
              alt="Environmental impact visualization"
              class="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-green-600">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p class="text-white text-xl mb-8 max-w-3xl mx-auto">
          Start your sustainability journey by choosing our eco-friendly
          products. Every purchase helps divert plastic waste from our
          environment.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button
            class="px-8 py-3 bg-white text-green-600 font-bold rounded-md hover:bg-gray-100 transition">
            Shop Now
          </button>
          <button
            class="px-8 py-3 border-2 border-white text-white font-bold rounded-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref("home-goods")
</script>
