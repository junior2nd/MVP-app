import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div class="grid bg-gradient-to-r from-red-900 to-red-500 h-screen ">
        <div className="grid place-content-center">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
            <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl rounded-xl">
                <div className="w-full p-12 ">
                  <div className=" text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
                        Oops!
                      </h3>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p>Sorry, an unexpected error has occurred.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
