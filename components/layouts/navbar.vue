<!-- components/Navbar.vue -->
<template>
    <nav class="bg-white py-4 px-6 shadow-sm">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo.png" alt="Lesstics Logo" class="h-10" />
        </NuxtLink>
  
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-green-600 transition">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-green-600 transition">About</NuxtLink>
          <NuxtLink to="/blog" class="text-gray-700 hover:text-green-600 transition">Blog</NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-green-600 transition">Products</NuxtLink>
        </div>
  
        <!-- Contact Button -->
        <div>
          <NuxtLink to="/contact" class="hidden md:inline-block px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition text-center w-[200px]">
            Contact Us
          </NuxtLink>
          
          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu (Hidden by default) -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
        <div class="flex flex-col space-y-2 px-4">
          <NuxtLink to="/" class="text-gray-700 hover:text-green-600 py-2 transition">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-green-600 py-2 transition">About</NuxtLink>
          <NuxtLink to="/blog" class="text-gray-700 hover:text-green-600 py-2 transition">Blog</NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-green-600 py-2 transition">Products</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-green-600 py-2 transition">Contact Us</NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const mobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  </script>