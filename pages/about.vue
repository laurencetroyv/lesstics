<template>
  <div>
    <!-- Page Header -->
    <div class="bg-green-600 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">About Lesstics</h1>
        <p class="text-white text-xl max-w-3xl">
          We're on a mission to transform the way we view and handle single-use
          plastics, turning waste into valuable resources.
        </p>
      </div>
    </div>

    <!-- Our Mission Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p class="text-gray-700 mb-4">
              At Lesstics, we believe that plastic isn't the problem—it's how we
              use and dispose of it. Our mission is to revolutionize the plastic
              lifecycle by implementing innovative solutions that transform
              single-use plastics into valuable resources.
            </p>
            <p class="text-gray-700 mb-4">
              We're tackling the global challenge of plastic waste by creating a
              circular economy where plastic is collected, processed, and
              transformed into new products, preventing it from polluting our
              environment.
            </p>
            <p class="text-gray-700">
              Through education, innovation, and community engagement, we're
              building a more sustainable future for plastic—one where it's
              valued as a resource, not disposed of as waste.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/mission.svg"
              alt="Our mission in action"
              class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Meet Our Team
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="flex justify-center items-center">
              <img
                src="/team-1.svg"
                alt="Team member photo"
                class="w-64 h-64 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Kenno Michael Uy
              </h3>
              <p class="text-green-600 font-medium mb-4">Founder & CEO</p>
              <p class="text-gray-600">
                With over 15 years of experience in sustainability and waste
                management, Jane leads our mission to revolutionize plastic use.
              </p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="flex justify-center items-center">
              <img
                src="/team-2.svg"
                alt="Team member photo"
                class="w-64 h-64 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Mark Johnson</h3>
              <p class="text-green-600 font-medium mb-4">Head of Operations</p>
              <p class="text-gray-600">
                Mark oversees our collection and processing operations, ensuring
                efficiency and sustainability at every step.
              </p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <div class="flex justify-center items-center">
              <img
                src="/team-3.svg"
                alt="Team member photo"
                class="w-64 h-64 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Sarah Chen</h3>
              <p class="text-green-600 font-medium mb-4">Innovation Director</p>
              <p class="text-gray-600">
                Sarah leads our R&D team, developing new technologies and
                products to transform plastic waste into valuable resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Metrics Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Impact
        </h2>

        <div class="grid md:grid-cols-4 gap-6">
          <!-- Metric 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-4xl font-bold text-green-600 mb-2">25K+</h3>
            <p class="text-gray-700">Kilograms of plastic collected</p>
          </div>

          <!-- Metric 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-4xl font-bold text-green-600 mb-2">15+</h3>
            <p class="text-gray-700">Communities engaged</p>
          </div>

          <!-- Metric 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-4xl font-bold text-green-600 mb-2">10K+</h3>
            <p class="text-gray-700">Products created</p>
          </div>

          <!-- Metric 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 class="text-4xl font-bold text-green-600 mb-2">95%</h3>
            <p class="text-gray-700">Waste diversion rate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-12">
          Our Partners
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Partner logos would go here -->
          <div class="bg-white p-6 rounded-lg flex items-center justify-center">
            <img
              src="/fablab.jpg"
              alt="The MSU-IIT FAB LAB Mindanao"
              class="h-52" />
          </div>
          <div class="bg-white p-6 rounded-lg flex items-center justify-center">
            <img
              src="/iligan-city.jpg"
              alt="The MSU-IIT FAB LAB Mindanao"
              class="h-52" />
          </div>
          <div class="bg-white p-6 rounded-lg flex items-center justify-center">
            <img
              src="/dost.png"
              alt="The MSU-IIT FAB LAB Mindanao"
              class="h-52" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
