<template>
  <div class="container mx-auto sm:pt-0 pt-16" >
    <div class="text-center">
      <h1 class="font-bold text-5xl text-primary dark:text-primaryDarker">Náhodator</h1>
      <p class="text-xl mt-8">Nahodator ti pomôže rozhodnúť sa v rôznych situáciách.</p>
    </div>

    <div class="grid sm:grid-cols-3 md:gap-8 gap-4 mt-20"> 
      <router-link to="/coin" class="bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out">
        <span class="lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold">Hod mincou</span>
      </router-link>
      <router-link to="/random" class="bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out">
        <span class="lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold">Náhodné číslo</span>
      </router-link>
      <router-link to="/magicball" class="bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out">
        <span class="lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold">Magic 8 ball</span>
      </router-link>
    </div>

    <div class="grid sm:grid-cols-[0.5fr_1fr_1fr_0.5fr] md:gap-8 gap-4 mb-20 md:mt-8 sm:mt-4">
      <div></div>
      <router-link to="/matches" class="bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out">
        <span class="lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold">Zápalky</span>
      </router-link>
      <router-link to="/crossroads" class="bg-stone-200 dark:bg-stone-750 text-center lg:py-20 md:py-14 sm:py-12 py-8 rounded-2xl hover:scale-105 duration-200 ease-in-out">
        <span class="lg:text-4xl md:text-3xl sm:text-xl text-2xl text-primary dark:text-primaryDarker font-bold">Križovatky</span>
      </router-link>
      <div></div>
    </div>

    <p class="text-center max-w-[44rem] mx-auto my-12">Používateľ nesie plnú zodpovednosť za akékoľvek škody, ktoré vzniknú v dôsledku konania na základe vygenerovanej hodnoty. Tieto škody môžu zahŕňať fyzické zranenia, materiálne škody, finančné straty, právne dôsledky, sociálne či emocionálne škody, stratu dôvery alebo reputačné poškodenie. Buďte preto opatrní pri používaní aplikácie a pri rozhodovaní na základe jej výstupov.</p>
  </div>
</template>

<script>

</script>
