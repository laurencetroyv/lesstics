<!-- pages/blog.vue -->
<template>
  <div>
    <!-- Page Header -->
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">Our Blog</h1>
        <p class="text-white text-xl max-w-3xl">
          Stay informed about plastic recycling, sustainability trends, and
          updates on our impact.
        </p>
      </div>
    </div>

    <!-- Featured Article Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-8">Featured Article</h2>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="h-64 md:h-auto">
              <img
                src="/blogs/sustainability.jpg"
                alt="Featured blog post"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-8">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>March 1, 2025</span>
                <span class="mx-2">•</span>
                <span>Sustainability</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                The Future of Plastic Recycling: Innovations Changing the Game
              </h3>
              <p class="text-gray-600 mb-6">
                From enzymatic breakdown to advanced sorting technologies,
                discover how new innovations are revolutionizing plastic
                recycling and making a circular economy more achievable than
                ever before.
              </p>
              <NuxtLink
                to="/blog/future-of-plastic-recycling"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold text-gray-800">Latest Articles</h2>

          <!-- Category Filter Dropdown -->
          <div class="relative">
            <select
              v-model="selectedCategory"
              class="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="all">All Categories</option>
              <option value="sustainability">Sustainability</option>
              <option value="recycling">Recycling</option>
              <option value="products">Products</option>
              <option value="community">Community</option>
              <option value="business">Business</option>
            </select>
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/community.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>February 25, 2025</span>
                <span class="mx-2">•</span>
                <span>Community</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                How Our Community Collection Program is Transforming Lives
              </h3>
              <p class="text-gray-600 mb-4">
                Meet the people behind our plastic collection efforts and
                discover how this program is creating sustainable livelihoods.
              </p>
              <NuxtLink
                to="/blog/community-collection-program"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>

          <!-- Blog Post 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/future-of-plastic-recycling.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>February 18, 2025</span>
                <span class="mx-2">•</span>
                <span>Recycling</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                5 Simple Ways to Reduce Your Plastic Footprint
              </h3>
              <p class="text-gray-600 mb-4">
                Practical tips and habits you can adopt today to significantly
                reduce your plastic consumption and environmental impact.
              </p>
              <NuxtLink
                to="/blog/reduce-plastic-footprint"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>

          <!-- Blog Post 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/manufacturing.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>February 10, 2025</span>
                <span class="mx-2">•</span>
                <span>Products</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Behind the Scenes: How We Turn Plastic Waste into Beautiful
                Products
              </h3>
              <p class="text-gray-600 mb-4">
                Take a tour of our manufacturing process and see the journey
                from plastic waste to finished product.
              </p>
              <NuxtLink
                to="/blog/manufacturing-process"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>

          <!-- Blog Post 4 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/products.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>February 3, 2025</span>
                <span class="mx-2">•</span>
                <span>Business</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Why Sustainable Packaging is Good for Business
              </h3>
              <p class="text-gray-600 mb-4">
                Exploring the business benefits of switching to sustainable
                packaging solutions, from cost savings to customer loyalty.
              </p>
              <NuxtLink
                to="/blog/sustainable-packaging-business"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>

          <!-- Blog Post 5 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/sustainability-2.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>January 28, 2025</span>
                <span class="mx-2">•</span>
                <span>Sustainability</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Understanding Plastic Types: A Guide to Recycling Symbols
              </h3>
              <p class="text-gray-600 mb-4">
                Learn what those numbers inside the recycling symbol mean and
                how to properly sort your plastic waste.
              </p>
              <NuxtLink
                to="/blog/plastic-recycling-symbols"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>

          <!-- Blog Post 6 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48">
              <img
                src="/blogs/community.jpg"
                alt="Blog post image"
                class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span>January 20, 2025</span>
                <span class="mx-2">•</span>
                <span>Community</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                School Recycling Programs: Educating the Next Generation
              </h3>
              <p class="text-gray-600 mb-4">
                How our educational initiatives in schools are empowering
                children to become environmental champions.
              </p>
              <NuxtLink
                to="/blog/school-recycling-programs"
                class="text-green-600 font-semibold hover:underline">
                Read More →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <nav class="inline-flex">
            <a
              href="#"
              class="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 rounded-l-md">
              Previous
            </a>
            <a
              href="#"
              class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              1
            </a>
            <a
              href="#"
              class="px-3 py-2 border-t border-b border-gray-300 bg-green-600 text-white">
              2
            </a>
            <a
              href="#"
              class="px-3 py-2 border-t border-b border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a
              href="#"
              class="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 rounded-r-md">
              Next
            </a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-green-600">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p class="text-white text-lg mb-8">
            Stay up-to-date with the latest news, articles, and resources on
            sustainability and plastic recycling.
          </p>

          <form
            @submit.prevent="subscribeToNewsletter"
            class="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              v-model="email"
              placeholder="Your email address"
              class="flex-grow px-4 py-3 rounded-md focus:outline-none"
              required />
            <button
              type="submit"
              class="px-6 py-3 bg-white text-green-600 font-bold rounded-md hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>

          <p
            v-if="subscribed"
            class="mt-4 text-white bg-green-700 py-2 px-4 rounded-md inline-block">
            Thank you for subscribing!
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-8">
          Browse by Category
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Sustainability</h3>
            <p class="text-sm text-gray-500">12 articles</p>
          </div>

          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
            <h3 class="font-semibold text-gray-800">Recycling</h3>
            <p class="text-sm text-gray-500">9 articles</p>
          </div>

          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
            <h3 class="font-semibold text-gray-800">Products</h3>
            <p class="text-sm text-gray-500">7 articles</p>
          </div>

          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Community</h3>
            <p class="text-sm text-gray-500">8 articles</p>
          </div>

          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Business</h3>
            <p class="text-sm text-gray-500">6 articles</p>
          </div>

          <div
            class="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition">
            <div
              class="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Research</h3>
            <p class="text-sm text-gray-500">4 articles</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref("all")
const email = ref("")
const subscribed = ref(false)

const subscribeToNewsletter = () => {
  // Here you would typically make an API call to add the email to your newsletter list
  subscribed.value = true
  email.value = ""

  // Hide the success message after 3 seconds
  setTimeout(() => {
    subscribed.value = false
  }, 3000)
}
</script>
