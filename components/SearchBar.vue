<template>
    <form class="space-y-6 w-4/5 mt-4" action="/search" method="POST">
        <div class="mt-4">
            <input id="query" name="query" type="query" autocomplete="digite a sua busca" required 
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" />
        </div>

        <div class="flex justify-center">
            <button type="submit" class="w-1/3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buscar</button>
        </div>
    </form>
</template>