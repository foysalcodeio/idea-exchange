const Header = () => {
  return (

      <div class="bg-blue-50 border-gray-200 rounded-md dark:bg-gray-900 p-1">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IDEA-EXCHANGE</span>
            </a>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <img src="https://avatars.githubusercontent.com/u/22427255?s=400&u=5b94b3f244d001949d46062f423add93e82a158c&v=4" class="h-8 outline-blue-500 rounded-full"/>
            </div>
          </div>
        </div>      

  );
};

export default Header;