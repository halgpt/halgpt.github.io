<template>
    <div class="mb-8 flex-column justify-center">
        <form class="space-y-6 w-4/5 mt-4" @submit.prevent="submitForm" method="POST">
            <div class="mt-4">
                <input id="query" 
                    name="query" 
                    type="text" 
                    v-model="m_query"
                    placeholder="me diga o que busca"
                    required 
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div class="flex justify-center">
                <button type="submit" 
                class="w-1/3 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
            </div>
        </form>
        <!--div class="mb-8 flex-column justify-center" v-if="responseData">
            <ul>
                <li v-for="item in responseData">
                    <ResultCard 
                        :place-name="item.nome_do_bar" 
                        :address="item.address"
                        :price="item.price"
                        :bar-description="item.bar_description"
                        :url-google-maps="item.url"
                        />   
                </li>
            </ul>
        </div-->
    </div>

</template>

<script>
    import ResultCard from '@/components/ResultCard'

    export default {
        data() {
            return {
                m_query: "",
                responseData: null
            }
        },
        methods: {
            async submitForm() {
                console.log(this.m_query)
                /*
                try {
                    const response = await $fetch(
                        'http://localhost:5000/api', {
                            method: 'POST',
                            body: { description: this.m_query}
                        })
                        console.log(response)
                    
                        this.responseData = response
                } catch (error) {
                    console.error(error)
                }
                */
            }
        }
    }
</script>