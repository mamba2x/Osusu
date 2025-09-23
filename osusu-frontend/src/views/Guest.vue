<!-- Parent Component -->
<script setup>
import About from '@/components/About.vue';

const features = [
  {
    title: 'Trust & Security',
    description: 'At Asusu, we value trust above all. Each group is managed by an admin who ensures that only verified members can participate, keeping contributions safe and transparent.',
    icon: '/src/assets/images/pen.png'
  },
  {
    title: 'Community & Unity',
    description: 'Asusu is built for groups that grow together. By pooling resources within trusted circles, members support one another while achieving shared financial goals.',
    icon: '/src/assets/images/pen.png'
  },
  {
    title: 'Growth & Empowerment',
    description: 'Our platform helps small contributions turn into meaningful rewards. By digitizing group savings, we empower members to reach their financial milestones faster.',
    icon: '/src/assets/images/pen.png'
  },
  {
    title: 'Convenience & Simplicity',
    description: 'Managing contributions and payouts has never been easier. Asusu brings group savings into the digital age, making every transaction simple, secure, and trackable anytime, anywhere.',
    icon: '/src/assets/images/pen.png'
  }
]
</script>

<template>
  <!-- Blue Background Section -->
  <div class="bg-blue-200  pb-20 lg:pb-3">
    <!-- Header -->
    <div class="flex justify-evenly items-center p-4 lg:px-29 py-5">
      <div>
        <img src="/src/assets/images/logo.svg" alt="Logo" width="120px">
      </div>
      <div class="hidden lg:flex gap-10 text-[18px] font-semibold">
        <a href="#" class="hover:text-blue-600">Terms</a>
        <a href="#" class="hover:text-blue-600">Why Us?</a>
        <a href="#" class="hover:text-blue-600">Privacy</a>
      </div>
      <div class="flex justify-center items-center bg-blue-600 p-2.5 rounded-[10px] text-white 
      hover:bg-blue-800">
        <a href="/login">Get Started</a>
      </div>
    </div>
    
    <!-- Hero Content - FIXED -->
    <div class="flex justify-center items-center px-4 lg:px-8 py-12">
      <div class="text-center max-w-2xl">
        <h1 class="text-[28px] font-bold lg:text-[40px] mb-1 leading-tight">DIGITIZE AND MANAGE YOUR</h1>
        <h1 class="text-[28px] font-bold lg:text-[40px] text-blue-600 mb-6 leading-tight">SAVINGS</h1>
        <div class="mt-5 text-[17px] font-semibold text-gray-700 lg:text-[20px]">
          <p class="leading-relaxed">
            Discover a smarter way to save and support one another.
            With Asusu, group savings turn into real opportunites.
            Start today and grow together.
          </p>
        </div>
        <!-- Fixed centered button -->
        <div class="flex justify-center items-center p-2.5 rounded-[10px] bg-blue-600 
        text-white mx-auto mt-6 w-32 lg:w-40 hover:bg-blue-800">
          <a href="/login" class="text-white">Get Started</a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- White Background Section for Partner Message -->
  <div class="bg-white mt-10">
    <!-- Partner Message -->
    <div class="px-4 lg:px-8 py-12">
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-[20px] lg:text-[25px] font-semibold text-gray-800">
          Growing together and igniting success with our trusted partner.
        </h2>
      </div>
      <div class="flex items-center justify-center mt-10">
        <img src="/src/assets/images/svl-logo.svg" alt="" width="250px">
      </div>
    </div>
    <div class="text-center max-w-3xl mx-auto px-4 lg:px-8 py-12">
      <div>
        <h1 class="text-[32px] font-semibold lg:text-[40px]">Still wondering why you should partner with us?</h1>
      </div>
      <div class="mt-5 text-[17px] lg:text-[20px]">
        <p>With Asusu, you don't just save you grow. Our platform makes group savings simple,
           transparent and rewarding. 
           Partner with us today an experience the power of unity.
        </p>
      </div>
    </div>
    <div class="text-center text-[32px] font-semibold lg:text-[40px] py-8">
      <h1>About us</h1>
    </div>
    <!-- Import and use About component -->
    <About :features="features" />
  </div>
  
  <!-- Footer/CTA Section - FIXED AND CENTERED -->
  <div class="bg-blue-600 rounded-[30px] mx-4 lg:mx-60 mt-20 py-10 lg:py-17">
    <div class="text-center text-white  mx-auto px-4 lg:flex lg:px-10">
      <div>
        <h2 class="text-2xl lg:text-3xl font-bold mb-4 lg:text-start">Reach New Horizons</h2>
       <p class="text-lg lg:text-xl leading-relaxed lg:text-start">
         Embrace the savings Evolution! Sign up 
         today and unlock new possibilities to 
         grow with our friendly and powerful solution.
       </p>
     </div>
     <div class="flex items-center justify-center"><img src="/src/assets/images/images.jpeg" alt="" class="hidden lg:block" width="250px" height="250px" style="border-radius: 20px;"></div>
    </div>
  </div>

  <div class="bg-blue-200 mt-20 py-20 lg:mt-30 lg:flex justify-evenly">
    <div>
      <img src="/src/assets/images/logo.svg" alt="">
      <div></div>
    </div>
    <div>
      <h1 class="font-semibold">Quick Links</h1>
      <p>Why us?</p>
      <p>Terms</p>
      <p>Privacy</p>
    </div>
    <div>
      <h1 class="font-semibold">Contact us</h1>
      <p>support@tryasusu.com</p>
      <p>08036748392</p>
      <p>07129928828</p>
    </div>
    <div>
      <h1 class="font-semibold">Address</h1>
      <p>Delta State Innovation Hub<br>
        #1, DBS Junction, Okpanam<br>Road Beside Zenith Bank Plc, Asaba.</p>
    </div>
  </div>
</template>