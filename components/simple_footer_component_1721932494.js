/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1721932494", {
    template: `
    <footer id="footer-section" class="flex-1 bg-white">
        <nav id="navbar" class="bg-white border-b border-purple-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src="./images/logo.svg" class="h-8 mr-3" alt="CryptoScope Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">CryptoScope</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="md:hidden text-gray-500 hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-purple-200 rounded-lg text-sm p-2.5 mr-1">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-purple-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-purple-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-purple-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0">Integrations</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            CryptoScope - Analyze Emerging Cryptocurrencies
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        Stay ahead of the curve with CryptoScope. Our powerful analysis tools help you evaluate new cryptocurrency projects, understand their fundamentals, and make informed investment decisions. Gain an edge in the dynamic world of crypto.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
